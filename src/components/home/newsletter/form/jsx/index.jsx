const Form = ( props ) => {

    return(
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 items-center pt-6 md:pt-16 w-full">
            <input className="h-12 w-full md:min-w-[600px] bg-transparent border border-cadence_gray"></input>
            <button className="bg-white w-full h-12 px-14 flex items-center justify-center uppercase font-roboto font-medium tracking-wide">Subscribe</button>
        </div>
    )

}

export default Form
