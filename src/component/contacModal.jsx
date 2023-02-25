import Contact from "./contact"

export default function ContactModal(){
    return(
        <div>
            <label htmlFor="my-modal-2" className="btn btn-primary mr-2">Contact Me</label>
            
            <input type="checkbox" id="my-modal-2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-4xl">
                    <label htmlFor="my-modal-2" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <Contact/>
                </div>
            </div>
        </div>
    )
}