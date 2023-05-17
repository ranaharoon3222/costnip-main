import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import { Popover } from '@headlessui/react';

const Canvas = (props) => {
  const ref = useRef(null);

  const [width, setWidth] = useState(0);
  const [image, setImage] = useState('');

  const [pencilSize, setPencilSize] = useState(0);
  const [pencilColor, setPencilColor] = useState('black');

  const canvaRef = useRef(null);

  useEffect(() => {
    if (canvaRef) {
      renderCanva(canvaRef, pencilColor, pencilSize);
    }
  }, [canvaRef, pencilColor, pencilSize]);

  // Button handlers

  const colors = [
    'black',
    'white',
    'red',
    'green',
    'blue',
    'yellow',
    '#ffff83',
  ];

  function fileToDataUri(field) {
    return new Promise((resolve) => {
      const reader = new FileReader();

      reader.addEventListener('load', () => {
        resolve(reader.result);
      });

      reader.readAsDataURL(field);
    });
  }

  const renderCanva = (canvaRef, pencilColor, pencilSize, image) => {
    const canvasElement = canvaRef.current;
    const context = canvasElement.getContext('2d');

    // if an image is present,
    // the image passed as a parameter is drawn in the canvas
    if (image) {
      const canvas = canvasElement;
      canvas.width = width;
      const hRatio = canvas.width / image.width;
      const vRatio = canvas.height / image.height;
      const ratio = Math.min(hRatio, vRatio);
      const centerShift_x = (canvas.width - image.width * ratio) / 2;
      const centerShift_y = (canvas.height - image.height * ratio) / 2;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        centerShift_x,
        centerShift_y,
        image.width * ratio,
        image.height * ratio
      );

      // const imageWidth = window.innerWidth;
      // const imageHeight = image.height;

      // // rescaling the canvas element
      // canvasElement.width = window.innerWidth;
      // canvasElement.height = imageHeight;

      // context.drawImage(image, 0, 0, imageWidth, imageHeight);
    }

    let isDrawing;

    canvasElement.onmousedown = (e) => {
      const rect = canvasElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      isDrawing = true;
      context.beginPath();
      context.lineWidth = pencilSize;
      context.strokeStyle = pencilColor;
      context.lineJoin = 'round';
      context.lineCap = 'round';
      context.moveTo(x, y);
    };

    canvasElement.onmousemove = (e) => {
      const rect = canvasElement.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (isDrawing) {
        context.lineTo(x, y);
        context.stroke();
      }
    };

    canvasElement.onmouseup = function () {
      isDrawing = false;
      context.closePath();
    };
  };

  const onClear = () => {
    const canvasElement = canvaRef.current;
    const context = canvasElement.getContext('2d');

    context.clearRect(0, 0, canvasElement.width, canvasElement.height);
  };

  const onSave = () => {
    const canvasElement = canvaRef.current;
    const img = canvasElement.toDataURL('image/png');
    setImage(img);
  };

  // Syles

  const styleCanva = {};

  const style = {
    marginTop: '5px',
  };

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <div ref={ref}>
      <img src={image} alt='' />
      <canvas
        ref={canvaRef}
        id='canvas'
        width='600'
        height='500'
        style={styleCanva}
      ></canvas>

      <section className='flex justify-between max-w-[400px] items-center flex-wrap md:flex-nowrap'>
        <div style={style} className='w-full'>
          <input
            type='range'
            min='0'
            max='20'
            value={pencilSize}
            onChange={(e) => {
              const value = e.target.value;
              setPencilSize(value);
            }}
            className='range max-w-[300px] mt-5'
            step='4'
          />
        </div>
        <div style={style}>
          <Popover className='relative mt-5'>
            <Popover.Button
              className='w-10 h-10 rounded-md shadow '
              style={{ background: pencilColor }}
            ></Popover.Button>

            <Popover.Panel className='absolute z-10 top-[-204px]'>
              <div className='grid grid-cols-2'>
                <HexColorPicker color={pencilColor} onChange={setPencilColor} />
              </div>
            </Popover.Panel>
          </Popover>
        </div>
      </section>

      <div style={style}>
        <button onClick={onSave} className='mr-5 btn'>
          Save
        </button>
        <button onClick={onClear} className='btn btn-outline'>
          Clear
        </button>
      </div>
      <br />
      <input
        id='upload'
        type='file'
        accept='image/*'
        onChange={async (e) => {
          const [file] = e.target.files;

          const image = document.createElement('img');
          const src = await fileToDataUri(file);
          image.src = src;

          // enbaling the brush after after the image
          // has been uploaded
          image.addEventListener('load', () => {
            const imageWidth = image.width;
            const imageHeight = image.height;
            console.log(file, imageWidth, imageHeight);
            renderCanva(canvaRef, pencilColor, pencilSize, image);
          });
        }}
      />
    </div>
  );
};

export default Canvas;
