function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-28 px-6">

      <h1 className="text-6xl font-bold mb-6">
        Crack Your Next Interview
      </h1>

      <p className="text-xl text-gray-600 max-w-3xl mb-8">

        Practice AI-powered mock interviews,
        receive instant feedback,
        and improve your confidence.

      </p>

      <button className="bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition">

        Start Interview

      </button>

    </section>
  );
}

export default Hero;