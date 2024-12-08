import { StepsData } from "./StepsData"

const Steps = () => {
  return (
    <section className="steps padding-block-36">
      <div className="steps__wrapper">
        <h2 className="steps__title text-center uppercase ff-accent fs-500 clr-neutral-600">
          sólo tres pasos
        </h2>
        <div className="steps__cards grid-layout flow margin-block-start-32">
          {StepsData.map((element) => {
            return (
              <article
                key={element.id}
                className={`text-center steps__${element.id} padding-20 bg-neutral-450`}
              >
                <img className="steps__check" src={element.icon} alt="check" />
                <h4 className="ff-accent uppercase fw-bold clr-neutral-600">
                  {element.title}
                </h4>
                <p className="clr-neutral-600">{element.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Steps
