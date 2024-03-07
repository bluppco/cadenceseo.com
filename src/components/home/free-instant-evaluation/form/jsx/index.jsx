const Form = ( props ) => {

    return(
        <div className="flex flex-col items-center gap-2 w-80 pt-2">
            <input
                className="w-full h-11 border border-[#e3e3e3] p-3 rounded placeholder:text-zinc-400 placeholder:font-light"
                placeholder="Website URL"
            />
            <input
                className="w-full h-11 border border-[#e3e3e3] p-3 rounded placeholder:text-zinc-400 placeholder:font-light"
                placeholder="First Name"
            />
            <input
                className="w-full h-11 border border-[#e3e3e3] p-3 rounded placeholder:text-zinc-400 placeholder:font-light"
                placeholder="Last Name"
            />
            <input
                className="w-full h-11 border border-[#e3e3e3] p-3 rounded placeholder:text-zinc-400 placeholder:font-light"
                placeholder="Email"
            />
            <button className="mt-2 h-11 bg-cadence_purple text-white tracking-wide font-roboto font-light px-14 rounded w-fit">See Results</button>
        </div>
    )

}

export default Form
