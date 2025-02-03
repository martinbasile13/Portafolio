import { useState } from 'react';
import emailjs from '@emailjs/browser';

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState({
        loading: false,
        error: null,
        success: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ loading: true, error: null, success: false });

        try {
            await emailjs.send(
                'TU_SERVICE_ID', // Reemplaza con tu Service ID
                'TU_TEMPLATE_ID', // Reemplaza con tu Template ID
                {
                    from_name: formData.name,
                    from_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                'TU_PUBLIC_KEY' // Reemplaza con tu Public Key
            );

            setStatus({ loading: false, error: null, success: true });
            setFormData({ name: '', email: '', subject: '', message: '' });
            
            setTimeout(() => {
                setStatus(prev => ({ ...prev, success: false }));
            }, 5000);

        } catch (error) {
            setStatus({ loading: false, error: 'Error al enviar el mensaje', success: false });
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
            
            <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl">
                <div className="card-body space-y-4">
                    {/* Campo Nombre */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Nombre</span>
                        </label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Ingresa tu nombre"
                            className="input input-bordered focus:input-primary"
                            required
                        />
                    </div>

                    {/* Campo Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="correo@ejemplo.com"
                            className="input input-bordered focus:input-primary"
                            required
                        />
                    </div>

                    {/* Campo Asunto */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Asunto</span>
                        </label>
                        <input 
                            type="text" 
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Asunto del mensaje"
                            className="input input-bordered focus:input-primary"
                            required
                        />
                    </div>

                    {/* Campo Mensaje */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Mensaje</span>
                        </label>
                        <textarea 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Escribe tu mensaje aquí"
                            className="textarea textarea-bordered h-32 focus:textarea-primary"
                            required
                        />
                    </div>

                    {/* Mensajes de estado */}
                    {status.error && (
                        <div className="alert alert-error">
                            <span>{status.error}</span>
                        </div>
                    )}
                    
                    {status.success && (
                        <div className="alert alert-success">
                            <span>¡Mensaje enviado con éxito!</span>
                        </div>
                    )}

                    {/* Botón de envío */}
                    <div className="form-control mt-6">
                        <button 
                            type="submit"
                            className="btn btn-primary w-full max-w-xs mx-auto hover:btn-primary-focus"
                            disabled={status.loading}
                        >
                            {status.loading ? 'Enviando...' : 'Enviar Mensaje'}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
} 