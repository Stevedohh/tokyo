import React from 'react';

const NewContent = () => {
    return (
        <div className="container mx-auto my-10 px-4">
            <div className="flex justify-center items-center">
                <video
                    className="w-full h-auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ maxWidth: '100%', height: 'auto' }}
                >
                    <source src="/assets/videos/Gpu.mp4" type="video/mp4" />
                    Ваш браузер не поддерживает видео.
                </video>
            </div>
        </div>
    );
};

export default NewContent;
