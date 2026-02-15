export default function CheckerboardBackground() {
    return (
        <>
            {/* checkerboard background  */}
            < div className="absolute inset-0 opacity-10" >
                <div className="w-full h-full"
                    style={{ backgroundImage: "repeating-conic-gradient(var(--color-cherry) 0%, var(--color-cherry) 25%, transparent 0%, transparent 50%)", backgroundSize: "100px 100px" }}
                >
                </div>
            </div >
        </>
    )
}