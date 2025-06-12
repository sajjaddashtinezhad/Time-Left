import * as React from "react"
import Calculator from "../components/calculator"
import Seo from "../components/seo";
import Header from "../components/header"
import { Link } from "gatsby";

const Why = () => {
    return (
        <main className="font-inter">
            <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-gray-100 p-4 font-inter flex flex-col items-center justify-center">
                <div className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-700 relative overflow-hidden">
                    <Header />
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold mb-4">Why I Created This?</h1>
                        <p className="text-gray-300 mb-4">
                            The Life Timer app calculates your estimated remaining days and hours based on your gender and country's average life expectancy. It serves as a powerful reminder to be conscious of each moment and the preciousness of your life.
                        </p>
                        <p className="text-gray-300 mb-4">
                            I first encountered this powerful idea in an interview with Jesse Itzler: he would write the remaining days of his life on his palm. This wasn't a dark approach; in fact, it's quite the opposite. It served as a potent reminder not to squander precious time on things he disliked—whether it was mindlessly doom-scrolling, excessive drinking, or other unfulfilling activities. Instead, it was an invitation to be present, to live each moment mindfully, and to pursue what truly resonated with him.
                        </p>
                    </div>
                    <div className="my-4">
                        <Link to="/" className="flex-1 w-full px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-lg transform transition-all duration-200 hover:scale-105">
                            Back to Home Page
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Why

export const Head = () => (
    <Seo
        title="Why I Created This?"
        description="This is a Progressive Web App (PWA) that provides a reflective estimate of an individual's remaining lifespan."
    />
)