'use client'

export default function ApplyBtn() {
    return (
            <button className="shadow-lg shadow-lime-300 hover:shadow-sm bg-gradient-to-tr from-green-700 to-lime-400 hover:from-green-800 hover:to-lime-500 text-white px-12 py-3 rounded-full font-medium hover:shadow-lg transition duration-300" onClick={()=> window.location.href = "/apply"}>
                Apply Now
            </button>
    )
}