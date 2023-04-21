import { useState } from 'react'
import questions from './data'
import Questions from './Questions'

const App = () => {
  const [faqs, setFaqs] = useState(questions)

  return (
    <div>
      <Questions faqs={faqs} />
    </div>
  )
}
export default App
