import React from 'react';
import { CircleMarker, Tooltip } from 'react-leaflet';
import { PanelData, ScopedVar, VariableModel } from '@grafana/data';
import { getLocationSrv, getTemplateSrv } from '@grafana/runtime';
import { IdataPoint, WorldMapOptions } from '../types';

import { DataPoints } from '../classes/DataPoints';

interface DataPointLayerProps {
  data: PanelData;
  options: WorldMapOptions;
}

interface ScopedVariable extends VariableModel {
  options: ScopedVar[];
}
export const DataPointLayer: React.FC<DataPointLayerProps> = ({ options, data }) => {
  const { decimals, labelTemplate, linkedVariable } = options;

  const setVariable = (value: string) => {
    if (!linkedVariable) {
      return;
    }
    getLocationSrv().update({
      query: {
        [`var-${linkedVariable}`]: value,
      },
      partial: true,
      replace: true,
    });
  };

  const renderLabel = (dataPoint: IdataPoint) => {
    const { name, prefix = '', suffix = '', value } = dataPoint;
    const displayValue = value.toFixed(decimals);

    return !!labelTemplate
      ? labelTemplate
          .replace('${name}', name)
          .replace('${value}', displayValue)
          .replace('${unit}', suffix)
      : `${prefix}${name}: ${displayValue}${suffix}`.trim();
  };

  const variables = getTemplateSrv().getVariables() as ScopedVariable[];
  const selectedLinkedVariable = variables.find(v => v.name === linkedVariable)?.options.find(o => o.selected);
  const dataPoints = new DataPoints(data.series, options, selectedLinkedVariable);

  return (
    <>
      {dataPoints.values.map(dataPoint => (
        <CircleMarker
          {...dataPoint.marker}
          eventHandlers={{
            click: () => setVariable(dataPoint.name),
          }}
        >
          <Tooltip>{renderLabel(dataPoint)}</Tooltip>
        </CircleMarker>
      ))}
    </>
  );
};
