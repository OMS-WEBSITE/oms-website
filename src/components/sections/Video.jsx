const VideoSection = () => {
    return (
        <section className="flex justify-center items-center min-h-screen bg-black">
            <video
                className="w-full max-w-xl rounded-lg shadow-lg"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/videos/brain.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </section>
    );
};



export default VideoSection;
