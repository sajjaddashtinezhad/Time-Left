import * as React from "react"
import Calculator from "../components/calculator"
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <main className="font-inter">
      <Calculator />
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo 
    title="Home Page" 
    description="This is a Progressive Web App (PWA) that provides a reflective estimate of an individual's remaining lifespan." 
  />
)