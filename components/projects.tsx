import texts from "./utils/sections.json";

function Projects() {
  return (
    <main className="py-[100px] px-2 max-w-[1440px] mx-auto">
      {/* header */}
      <div className="max-w-3xl mx-auto text-center pb-10 md:pb-10 mt-14">
        <h1 className="text-5xl font-bold mb-7">
          {texts["section-eight"].title}
        </h1>
      </div>

      {/* Members */}
      <div className="flex flex-col lg:card lg:card-side  bg-base-100 shadow-xl">
        <figure className="w-200 h-auto">
          <img
            content="cover"
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1715485555/VR%20Executive/vhngakthjt9d4f9ghnwq.jpg"
            alt="Movie"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            REDUCCIÓN DEL DESPERDICIO DE ALIMENTOS MEDIANTE REALIDAD AUMENTADA
          </h2>
          <p>
            Imagine un mundo donde reducir el desperdicio de alimentos sea tan
            simple como mirar a través de su teléfono inteligente. Nuestra
            solución innovadora aprovecha el poder de la realidad aumentada (AR)
            para abordar uno de los desafíos globales más apremiantes: el
            desperdicio de alimentos. Con nuestra tecnología AR, los usuarios
            pueden visualizar y rastrear fácilmente su inventario de alimentos,
            recibir alertas de vencimiento en tiempo real y acceder a recetas
            personalizadas basadas en los ingredientes que ya tienen. Al
            capacitar a las personas para que tomen decisiones informadas sobre
            su consumo y almacenamiento de alimentos, no solo ahorramos dinero y
            recursos, sino que también contribuimos a un futuro más sostenible
            para todos.
          </p>
          <div className="card-actions justify-end">
            <a href="https://leadsculpt.blog.jumpylife.com" target="blank_">
              <button type="button" className="btn btn-primary">
                Ir
              </button>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Projects;
