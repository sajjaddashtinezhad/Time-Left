import * as React from "react"
import Calculator from "../components/calculator"
import Seo from "../components/seo";
import Header from "../components/header"

const IndexPage = () => {
  return (
    <main className="font-inter">
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 p-4 font-inter flex flex-col items-center justify-center">
        <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-700 relative overflow-hidden">
            <Header />
            <Calculator />
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => (
  <Seo 
    title="Time Left" 
    description="This is a Progressive Web App (PWA) that provides a reflective estimate of an individual's remaining lifespan." 
  />
)