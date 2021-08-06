import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FixedSizeGrid as Grid } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { changeScrollPosition, showAddMarker } from 'storage/actions/actions';

import './grid.scss';
import Markers from './markers/markers.jsx';
import {  } from 'storage/actions/actions';

const GridMap = () => {
  const dispatch = useDispatch();
  const { scale } = useSelector((state) => state.worldMapStore.mapValues.positioning);
  const baseUrl = 'https://cdn.mapgenie.io/images/tiles/genshin-impact/teyvat/default-v4/';

  // (scale=10, col-min=9, col-max=11 line-min=9, line-max=11)
  // (scale=11, col-min=19, col-max=22 line-min=19, line-max=22)
  // (scale=12, col-min=39, col-max=43 line-min=39, line-max=43)
  // (scale=13, col-min=77, col-max=86 line-min=77, line-max=86)
  // (scale=14, col-min=154, col-max=171 line-min=154, line-max=171)
  // (scale=15, col-min=308, col-max=341 line-min=308, line-max=341)
  // (scale=16, col-min=616, col-max=682 line-min=616, line-max=682)
  // (scale=17, col-min=232, col-max=364 line-min=232, line-max=364)
  
  const mapData = [
    {
      scale: 10,
      beginNumber: 500,
      columnStartValue: 8,
      columnEndValue: 12,
      rowStartValue: 8,
      rowEndValue: 12,
      pictureWidth: 256,
      pictureHeight: 256,
      extension: 'png'
    }, {
      scale: 11,
      beginNumber: 1000,
      columnStartValue: 16,
      columnEndValue: 24,
      rowStartValue: 16,
      rowEndValue: 24,
      pictureWidth: 256,
      pictureHeight: 256,
      extension: 'png'
    }, {
      scale: 12,
      beginNumber: 2000,
      columnStartValue: 32,
      columnEndValue: 48,
      rowStartValue: 32,
      rowEndValue: 48,
      pictureWidth: 256,
      pictureHeight: 256,
      extension: 'png'
    }, {
      scale: 13,
      beginNumber: 4000,
      columnStartValue: 64,
      columnEndValue: 96,
      rowStartValue: 64,
      rowEndValue: 96,
      pictureWidth: 256,
      pictureHeight: 256,
      extension: 'png'
    }, {
      scale: 14,
      beginNumber: 8000,
      columnStartValue: 128,
      columnEndValue: 192,
      rowStartValue: 128,
      rowEndValue: 192,
      pictureWidth: 256,
      pictureHeight: 256,
      extension: 'png'
    }, {
      scale: 15,
      beginNumber: 16000,
      columnStartValue: 256,
      columnEndValue: 384,
      rowStartValue: 256,
      rowEndValue: 384,
      pictureWidth: 256,
      pictureHeight: 256,
      extension: 'png'
    }, {
      scale: 16,
      beginNumber: 32000,
      columnStartValue: 512,
      columnEndValue: 768,
      rowStartValue: 512,
      rowEndValue: 768,
      pictureWidth: 256,
      pictureHeight: 256,
      extension: 'png'
    }, {
      scale: 17,
      beginNumber: 64000,
      columnStartValue: 1024,
      columnEndValue: 1536,
      rowStartValue: 1024,
      rowEndValue: 1536,
      pictureWidth: 256,
      pictureHeight: 256,
      extension: 'png'
    }, 
  ];

  const click = (event) => {
    if (event.target.className !== 'icon-image') {
      const { width, height } = event.target.getBoundingClientRect();
      const { offsetX, offsetY } = event.nativeEvent;
      localStorage.setItem('positioning', JSON.stringify([offsetX, offsetY, scale]));
      dispatch(changeScrollPosition({ x: 100 * offsetX / width, y: 100 * offsetY / height }));

      if (event.ctrlKey) dispatch(showAddMarker(true));
    }
  };



  const scroll = (event) => {
    const { scrollTop, scrollLeft } = event;

    document.querySelector('.marker-wrapper').scrollTop = scrollTop;
    document.querySelector('.marker-wrapper').scrollLeft = scrollLeft;
  };

  const Row = ({ columnIndex, rowIndex, style }, baseUrl, { scale, beginNumber, columnStartValue, rowStartValue, extension }) => {
    return (
      <img className="image" 
          src={`${baseUrl}${scale}/${beginNumber + columnStartValue + columnIndex}/${beginNumber + rowStartValue + rowIndex}.${extension}`} 
          alt={`img ${columnStartValue + columnIndex}-${rowStartValue + rowIndex}`}
          style={style}
      />
    );
  };

  return (
    <div className="cls" onClick={click}>
      <AutoSizer>
        {({ height, width}) => (
          <Grid
            className="grid"
            columnCount={mapData[scale].columnEndValue - mapData[scale].columnStartValue}
            columnWidth={mapData[scale].pictureWidth}
            rowCount={mapData[scale].rowEndValue - mapData[scale].rowStartValue}
            rowHeight={mapData[scale].pictureHeight}
            width={width}
            height={height}
            onScroll={scroll}
            scrollTop={8192}
            scrollLeft={8192}
          >
            {(values) => Row(values, baseUrl, mapData[scale])}
          </Grid>
        )}
      </AutoSizer>
      <div className="marker-wrapper">
        <div className="marker-list"
             style={{
               width: (mapData[scale].columnEndValue - mapData[scale].columnStartValue) * mapData[scale].pictureWidth,
               height: (mapData[scale].rowEndValue - mapData[scale].rowStartValue) * mapData[scale].pictureHeight
             }}
        >
          <Markers />
        </div>
      </div>
    </div>
  );
};

export default GridMap;