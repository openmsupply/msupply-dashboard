import React, { createRef, PureComponent } from 'react';
import { Icon, Tooltip } from '@grafana/ui';
import { sanitize, sanitizeUrl } from '@grafana/data/src/text/sanitize';
import { getBackendSrv } from 'app/core/services/backend_srv';
import { getLinkSrv } from '../../../panel/panellinks/link_srv';
import { DashboardLink } from '../../state/DashboardModel';
import { DashboardSearchHit } from 'app/features/search/types';
import { selectors } from '@grafana/e2e-selectors';

interface Props {
  link: DashboardLink;
  linkInfo: { title: string; href: string };
  dashboardId: any;
}

interface State {
  resolvedLinks: ResolvedLinkDTO[];
}

export class DashboardLinksDashboard extends PureComponent<Props, State> {
  state: State = { resolvedLinks: [] };
  wrapperRef = createRef<HTMLDivElement>();
  listItemRef = createRef<HTMLUListElement>();

  componentDidMount() {
    this.searchForDashboards();
  }

  componentDidUpdate(prevProps: Readonly<Props>) {
    if (this.props.link !== prevProps.link || this.props.linkInfo !== prevProps.linkInfo) {
      this.searchForDashboards();
    }
  }

  searchForDashboards = async () => {
    const { dashboardId, link } = this.props;

    const searchHits = await searchForTags(link);
    const resolvedLinks = resolveLinks(dashboardId, link, searchHits);

    this.setState({ resolvedLinks });
  };

  renderElement = (linkElement: JSX.Element, key: string, selector: string) => {
    const { link } = this.props;

    return (
      <div className="gf-form" key={key} aria-label={selector} ref={this.wrapperRef}>
        {link.tooltip && <Tooltip content={link.tooltip}>{linkElement}</Tooltip>}
        {!link.tooltip && <>{linkElement}</>}
      </div>
    );
  };

  renderList = () => {
    const { link } = this.props;
    const { resolvedLinks } = this.state;

    return (
      <>
        {resolvedLinks.length > 0 &&
          resolvedLinks.map((resolvedLink, index) => {
            const linkElement = (
              <a
                className="gf-form-label"
                href={resolvedLink.url}
                target={link.targetBlank ? '_blank' : '_self'}
                aria-label={selectors.components.DashboardLinks.link}
              >
                <Icon name="apps" style={{ marginRight: '4px' }} />
                <span>{resolvedLink.title}</span>
              </a>
            );
            return this.renderElement(
              linkElement,
              `dashlinks-list-item-${resolvedLink.id}-${index}`,
              selectors.components.DashboardLinks.container
            );
          })}
      </>
    );
  };

  getDropdownLocationCssClass = (): string => {
    const [pullLeftCssClass, pullRightCssClass] = ['pull-left', 'pull-right'];
    const wrapper = this.wrapperRef.current;
    const list = this.listItemRef.current;
    if (!wrapper || !list) {
      return pullRightCssClass;
    }
    return wrapper.offsetLeft > list.offsetWidth - wrapper.offsetWidth ? pullRightCssClass : pullLeftCssClass;
  };

  renderDropdown = () => {
    const { link, linkInfo } = this.props;
    const { resolvedLinks } = this.state;

    const linkElement = (
      <>
        <a
          className="gf-form-label pointer"
          onClick={this.searchForDashboards}
          data-placement="bottom"
          data-toggle="dropdown"
        >
          <Icon name="bars" />
          <span>{linkInfo.title}</span>
        </a>
        <ul className={'dropdown-menu ' + this.getDropdownLocationCssClass()} role="menu" ref={this.listItemRef}>
          {resolvedLinks.length > 0 &&
            resolvedLinks.map((resolvedLink, index) => {
              return (
                <li key={`dashlinks-dropdown-item-${resolvedLink.id}-${index}`}>
                  <a
                    href={resolvedLink.url}
                    target={link.targetBlank ? '_blank' : '_self'}
                    aria-label={selectors.components.DashboardLinks.link}
                  >
                    {resolvedLink.title}
                  </a>
                </li>
              );
            })}
        </ul>
      </>
    );

    return this.renderElement(linkElement, 'dashlinks-dropdown', selectors.components.DashboardLinks.dropDown);
  };

  render() {
    if (this.props.link.asDropdown) {
      return this.renderDropdown();
    }

    return this.renderList();
  }
}

interface ResolvedLinkDTO {
  id: any;
  url: string;
  title: string;
}

export async function searchForTags(
  link: DashboardLink,
  dependencies: { getBackendSrv: typeof getBackendSrv } = { getBackendSrv }
): Promise<DashboardSearchHit[]> {
  const limit = 100;
  const searchHits: DashboardSearchHit[] = await dependencies.getBackendSrv().search({ tag: link.tags, limit });

  return searchHits;
}

export function resolveLinks(
  dashboardId: any,
  link: DashboardLink,
  searchHits: DashboardSearchHit[],
  dependencies: { getLinkSrv: typeof getLinkSrv; sanitize: typeof sanitize; sanitizeUrl: typeof sanitizeUrl } = {
    getLinkSrv,
    sanitize,
    sanitizeUrl,
  }
): ResolvedLinkDTO[] {
  return searchHits
    .filter(searchHit => searchHit.id !== dashboardId)
    .map(searchHit => {
      const id = searchHit.id;
      const title = dependencies.sanitize(searchHit.title);
      const resolvedLink = dependencies.getLinkSrv().getLinkUrl({ ...link, url: searchHit.url });
      const url = dependencies.sanitizeUrl(resolvedLink);

      return { id, title, url };
    });
}