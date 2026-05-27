import { useState } from "react";

const preguntas = [
  {
    pregunta: "¿Cuál es el color favorito de Valentina?",
    opciones: ["Verde salvia", "Rosa palo", "Negro", "Azul cielo"],
    correcta: 0,
  },
  {
    pregunta: "¿Qué le encanta hacer en su tiempo libre?",
    opciones: ["Leer", "Bailar", "Pintar", "Cocinar"],
    correcta: 2,
  },
  {
    pregunta: "¿Cuál es su comida favorita?",
    opciones: ["Sushi", "Pizza", "Pasta", "Tacos"],
    correcta: 1,
  },
  {
    pregunta: "¿A qué artista escucha todo el día?",
    opciones: ["Taylor Swift", "Billie Eilish", "Olivia Rodrigo", "Sabrina Carpenter"],
    correcta: 3,
  },
  {
    pregunta: "¿Cuál es su serie favorita?",
    opciones: ["Stranger Things", "Euphoria", "The Crown", "Emily in Paris"],
    correcta: 1,
  },
];

export default function InvitacionTrivia() {
  const [pantalla, setPantalla] = useState("invitacion");
  const [paso, setPaso] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [respondida, setRespondida] = useState(false);
  const [puntaje, setPuntaje] = useState(0);
  const [respuestas, setRespuestas] = useState([]);

  const handleOpcion = (idx) => {
    if (respondida) return;
    setSeleccion(idx);
    setRespondida(true);
    const correcta = preguntas[paso].correcta === idx;
    if (correcta) setPuntaje((p) => p + 1);
    setRespuestas((r) => [...r, correcta]);
  };

  const handleSiguiente = () => {
    if (paso < preguntas.length - 1) {
      setPaso((p) => p + 1);
      setSeleccion(null);
      setRespondida(false);
    } else {
      setPantalla("resultado");
    }
  };

  const reiniciar = () => {
    setPantalla("invitacion");
    setPaso(0);
    setSeleccion(null);
    setRespondida(false);
    setPuntaje(0);
    setRespuestas([]);
  };

  const getMensaje = () => {
    if (puntaje === 5) return { texto: "¡Me conocés de memoria! 🖤", sub: "Sos mi persona favorita en la fiesta." };
    if (puntaje >= 3) return { texto: "¡Bastante bien! ✨", sub: "Ya casi, pero hay cosas que solo yo sé..." };
    return { texto: "¡Hay que ponerse al día! 🫶", sub: "Más razones para festejar juntos." };
  };

  return (
    <div style={{minHeight:"100vh",background:"#f7f5f2",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"Georgia, serif",padding:"20px"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@300;400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .card{background:#fff;border-radius:2px;max-width:420px;width:100%;overflow:hidden;box-shadow:0 2px 40px rgba(0,0,0,0.07)}
        .header-band{background:#1a1a1a;padding:36px 32px 28px;text-align:center}
        .header-band::after{content:'';display:block;width:40px;height:1px;background:#c9a96e;margin:18px auto 0}
        .nombre{font-family:'Cormorant Garamond',serif;font-size:42px;font-weight:300;color:#fff;letter-spacing:2px;line-height:1.1}
        .anios{font-family:'DM Sans',sans-serif;font-size:11px;font-weight:300;color:#c9a96e;letter-spacing:5px;text-transform:uppercase;margin-top:8px}
        .body{padding:32px}
        .fecha-row{display:flex;justify-content:space-between;border-top:1px solid #ebebeb;border-bottom:1px solid #ebebeb;padding:16px 0;margin-bottom:28px}
        .fecha-item{text-align:center;flex:1}
        .fecha-label{font-family:'DM Sans',sans-serif;font-size:9px;font-weight:500;letter-spacing:3px;text-transform:uppercase;color:#aaa;display:block;margin-bottom:4px}
        .fecha-valor{font-family:'Cormorant Garamond',serif;font-size:18px;color:#1a1a1a}
        .divider-dot{width:1px;background:#ebebeb;align-self:stretch}
        .invite-text{font-family:'Cormorant Garamond',serif;font-size:17px;font-style:italic;color:#555;text-align:center;line-height:1.7;margin-bottom:28px}
        .trivia-cta{background:#1a1a1a;color:#fff;border:none;width:100%;padding:16px;font-family:'DM Sans',sans-serif;font-size:11px;font-weight:500;letter-spacing:4px;text-transform:uppercase;cursor:pointer}
        .trivia-cta-gold{background:transparent;color:#c9a96e;border:1px solid #c9a96e;width:100%;padding:14px;font-family:'DM Sans',sans-serif;font-size:10px;font-weight:500;letter-spacing:3px;text-transform:uppercase;cursor:pointer;margin-top:12px}
        .trivia-header{background:#1a1a1a;padding:24px 32px;display:flex;align-items:center;justify-content:space-between}
        .trivia-titulo{font-family:'Cormorant Garamond',serif;font-size:20px;color:#fff;font-weight:300;letter-spacing:1px}
        .progress-text{font-family:'DM Sans',sans-serif;font-size:10px;color:#c9a96e;letter-spacing:2px}
        .progress-bar-wrap{height:2px;background:#ebebeb}
        .progress-bar-fill{height:2px;background:#c9a96e;transition:width 0.4s ease}
        .pregunta-body{padding:32px}
        .pregunta-texto{font-family:'Cormorant Garamond',serif;font-size:22px;color:#1a1a1a;line-height:1.5;margin-bottom:24px}
        .opcion-btn{display:block;width:100%;text-align:left;padding:14px 18px;border:1px solid #e0e0e0;background:#fff;font-family:'DM Sans',sans-serif;font-size:14px;color:#333;cursor:pointer;margin-bottom:10px;border-radius:1px}
        .opcion-correcta{border-color:#2e7d32!important;background:#f1f8f1!important;color:#2e7d32!important}
        .opcion-incorrecta{border-color:#c62828!important;background:#fdf1f1!important;color:#c62828!important}
        .siguiente-btn{background:#1a1a1a;color:#fff;border:none;width:100%;padding:15px;font-family:'DM Sans',sans-serif;font-size:10px;font-weight:500;letter-spacing:4px;text-transform:uppercase;cursor:pointer;margin-top:6px}
        .resultado-header{background:#1a1a1a;padding:40px 32px;text-align:center}
        .puntaje-numero{font-family:'Cormorant Garamond',serif;font-size:72px;font-weight:300;color:#c9a96e;line-height:1}
        .puntaje-de{font-family:'DM Sans',sans-serif;font-size:11px;letter-spacing:4px;color:#888;text-transform:uppercase;margin-top:6px}
        .resultado-body{padding:32px;text-align:center}
        .resultado-mensaje{font-family:'Cormorant Garamond',serif;font-size:26px;color:#1a1a1a;margin-bottom:10px}
        .resultado-sub{font-family:'DM Sans',sans-serif;font-size:13px;color:#888;line-height:1.6;margin-bottom:28px}
        .respuestas-fila{display:flex;justify-content:center;gap:8px;margin-bottom:28px}
        .resp-dot{width:10px;height:10px;border-radius:50%}
      `}</style>
      <div className="card">
        {pantalla === "invitacion" && (
          <>
            <div className="header-band">
              <div className="anios">XV años</div>
              <div className="nombre">Valentina</div>
            </div>
            <div className="body">
              <div className="fecha-row">
                <div className="fecha-item"><span className="fecha-label">Fecha</span><span className="fecha-valor">14 sep</span></div>
                <div className="divider-dot"/>
                <div className="fecha-item"><span className="fecha-label">Hora</span><span className="fecha-valor">20:00</span></div>
                <div className="divider-dot"/>
                <div className="fecha-item"><span className="fecha-label">Lugar</span><span className="fecha-valor">Salón Noa</span></div>
              </div>
              <p className="invite-text">Quince años de risas, sueños y momentos que no se olvidan.<br/>Te espero para festejar juntos.</p>
              <button className="trivia-cta" onClick={() => setPantalla("trivia")}>¿Me conocés? →</button>
            </div>
          </>
        )}
        {pantalla === "trivia" && (
          <>
            <div className="trivia-header">
              <span className="trivia-titulo">¿Me conocés?</span>
              <span className="progress-text">{paso + 1} / {preguntas.length}</span>
            </div>
            <div className="progress-bar-wrap">
              <div className="progress-bar-fill" style={{width:`${((paso+(respondida?1:0))/preguntas.length)*100}%`}}/>
            </div>
            <div className="pregunta-body">
              <p className="pregunta-texto">{preguntas[paso].pregunta}</p>
              {preguntas[paso].opciones.map((op,idx) => {
                let cls = "opcion-btn";
                if(respondida){
                  if(idx===preguntas[paso].correcta) cls+=" opcion-correcta";
                  else if(idx===seleccion) cls+=" opcion-incorrecta";
                }
                return <button key={idx} className={cls} onClick={()=>handleOpcion(idx)} disabled={respondida}>{op}</button>
              })}
              {respondida && <button className="siguiente-btn" onClick={handleSiguiente}>{paso<preguntas.length-1?"Siguiente →":"Ver resultado →"}</button>}
            </div>
          </>
        )}
        {pantalla === "resultado" && (()=>{
          const msg = getMensaje();
          return (
            <>
              <div className="resultado-header">
                <div className="puntaje-numero">{puntaje}</div>
                <div className="puntaje-de">de {preguntas.length} correctas</div>
              </div>
              <div className="resultado-body">
                <div className="respuestas-fila">{respuestas.map((r,i)=><div key={i} className="resp-dot" style={{background:r?"#2e7d32":"#c62828"}}/>)}</div>
                <p className="resultado-mensaje">{msg.texto}</p>
                <p className="resultado-sub">{msg.sub}</p>
                <button className="trivia-cta" onClick={reiniciar}>Volver a la invitación</button>
                <button className="trivia-cta-gold" onClick={()=>{setPaso(0);setSeleccion(null);setRespondida(false);setPuntaje(0);setRespuestas([]);setPantalla("trivia")}}>Jugar de nuevo</button>
              </div>
            </>
          )
        })()}
      </div>
    </div>
  );
}
