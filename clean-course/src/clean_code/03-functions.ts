(() => {
  function getMovieById(movieId: string) {
    console.log({ movieId });
  }

  function getMovieCastById(movieId: string) {
    console.log({ movieId });
  }

  // funcion para obtener el bio del actor por el id
  function getActorBioById(ActorId: string) {
    console.log({ ActorId });
  }

  interface Movie {
    title: string;
    description: string;
    rating: number;
    cast: string[];
  }

  // Crear una película
  function createMovie({ title, cast, description, rating }: Movie) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  async function createActor(
    fullName: string,
    birthdate: Date
  ): Promise<boolean> {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }

  // Continuar

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }): number => {
    let result: number;

    if (isDead) return 1500;

    if (isSeparated) return 2500;

    if (isRetired) return 3000;

    return 4000;
  };
})();
