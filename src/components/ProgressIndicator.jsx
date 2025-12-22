export default function ProgressIndicator({ current, total }) {
    return (
        <div className="progress-wrapper">
            {Array.from({ length: total }).map((_, i) => (
                <div
                    key={i}
                    className={`progress-bar ${i <= current ? "active" : ""}`}
                />
            ))}
        </div>
    );
}
