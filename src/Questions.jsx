import SingleQuestion from './SingleQuestion'

const Questions = ({ faqs }) => {
  return (
    <section className="container">
      <h1>Questions</h1>

      {faqs.map(faq => {
        return <SingleQuestion key={faq.id} {...faq} />
      })}
    </section>
  )
}

export default Questions
