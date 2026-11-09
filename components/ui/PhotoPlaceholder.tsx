//Bloque que reserva el espacio de una foto mientras no exista la imagen real
//Cuando llegue la foto, se reemplaza por <Image /> de next/image
type PhotoPlaceholderProps = {
    label?: string;
    className?: string;
}

export default function PhotoPlaceholder({ 
    label = "Foto próximamente", 
    className = ""}: PhotoPlaceholderProps) {
            return (
                <div 
                    role="img"
                    aria-label={label}
                    className = {`relative flex items-center justify-center overflow-hidden bg-sand/30 ${className}`}>
                        {/*Textura decorativa de lineas diagonales */}
                        <div 
                            aria-hidden="true"
                            className = "absolute inset-0 opacity-60"
                            style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent 0 16px, color-mix(in srgb, var(--color-cinnamon) 6%, transparent) 16px 17px)" }}
                        />

                        {label && (
                            <span className="relative font-sans text-[10px] uppercase tracking-[0.35em] text-cinnamon/60">
                                {label}
                            </span>
                        )}
                </div>
            );
    }