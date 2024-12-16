import { ThirdData } from "./ThirdData"

const Third = () => {
  return (
    <section className="third padding-block-end-36">
      <h3 className="third__title fs-600">hosting</h3>
      <div className="third__wrapper">
        {ThirdData.map((item) => {
          return (
            <article
              key={item.id}
              className={`third__card-${item.id} box-shadow margin-block-start-16`}
              data-level="shadow-1"
            >
              <div className="third__content grid-layout text-center">
                <div className="third__box">
                  <img className="third__icon" src={item.img} alt="" />
                </div>
                <ul className="third__ul">
                  <h4 className="third__subtitle">{item.title}</h4>
                  <p className="ff-accent margin-block-end-16">{item.price}</p>
                  {Object.entries(item.caracteristicas).map(
                    ([key, value], index) => (
                      <li className="third__li" key={index}>
                        <label className="third__label ff-accent">
                          {`${key}: ${value}`}
                        </label>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Third
