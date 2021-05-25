import './Device.less';

import { context, usePrefersColor } from 'dumi/theme';
import QRCode from 'qrcode.react';
import React, { FC, useContext, useEffect, useState } from 'react';

interface IDeviceProps {
  className?: string;
  url: string;
  title?: string;
}

const Device: FC<IDeviceProps> = ({ url, className = '', title = 'tuya' }) => {
  const [renderKey, setRenderKey] = useState(Math.random());
  const [dateTime, setDateTime] = useState(new Date());
  const [color] = usePrefersColor();
  const {
    config: { mode },
  } = useContext(context);

  // re-render iframe if prefers color changed
  useEffect(() => {
    setRenderKey(Math.random());
  }, [color]);
  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 60000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div
      className={['__dumi-default-device'].concat(className).join(' ')}
      data-device-type="iOS"
      data-mode={mode}
    >
      <div className="__dumi-default-device-status">
        <span>{title}</span>
        <span>{`${dateTime
          .getHours()
          .toString()
          .padStart(2, '0')}:${dateTime
          .getMinutes()
          .toString()
          .padStart(2, '0')}`}</span>
      </div>
      <iframe title="dumi-previewer" src={url} key={renderKey} />
      <div className="__dumi-default-device-action">
        <button
          className="__dumi-default-icon"
          role="refresh"
          onClick={() => setRenderKey(Math.random())}
        />
        <button className="__dumi-default-icon" role="qrcode">
          <QRCode value={url} size={96} />
        </button>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="__dumi-default-icon"
          role="open-demo"
        />
      </div>
    </div>
  );
};

export default Device;