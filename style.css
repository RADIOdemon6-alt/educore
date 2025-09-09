/* إعداد الثيم الجديد - Dark Neon */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body, html {
  height: 100%;
  font-family: 'Arial', sans-serif;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: radial-gradient(circle at center, #0a001f, #000010 80%);
  color: #fff;
  text-align: center;
  position: relative;
}

/* دوائر نيون متحركة */
.background .circle {
  position: absolute;
  border-radius: 50%;
  opacity: 0.15;
  animation: float 20s ease-in-out infinite;
  filter: blur(6px);
  mix-blend-mode: screen;
}

.background .circle:nth-child(1) { width: 160px; height: 160px; top: 15%; left: 20%; background: #0ff; box-shadow: 0 0 40px #0ff,0 0 80px #0ff; animation-duration: 18s; }
.background .circle:nth-child(2) { width: 220px; height: 220px; top: 50%; left: 65%; background: #f0f; box-shadow: 0 0 50px #f0f,0 0 100px #f0f; animation-duration: 22s; }
.background .circle:nth-child(3) { width: 120px; height: 120px; top: 70%; left: 40%; background: #0f0; box-shadow: 0 0 35px #0f0,0 0 70px #0f0; animation-duration: 20s; }

@keyframes float {
  0% { transform: translate(0,0) scale(1); }
  25% { transform: translate(30px,-20px) scale(1.05); }
  50% { transform: translate(-25px,25px) scale(1.1); }
  75% { transform: translate(20px,-30px) scale(1.05); }
  100% { transform: translate(0,0) scale(1); }
}

/* بطاقة تسجيل الدخول */
.login-container {
  position: relative;
  z-index: 1;
  background: rgba(10,0,30,0.85);
  backdrop-filter: blur(15px);
  padding: 120px 25px 25px 25px;
  border-radius: 20px;
  box-shadow: 0 0 20px #0ff, 0 0 40px #f0f inset;
  width: 90%;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

/* تأثير 3D عند تحريك الماوس */
.login-container.tilt {
  transform: perspective(600px) rotateY(var(--tiltY)) rotateX(var(--tiltX));
}

/* Avatar 3D Neon Floating */
.card-avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid #0ff;
  box-shadow: 0 0 15px #0ff, 0 0 30px #0ff inset;
  overflow: hidden;
  background: rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute; 
  top: -60px;
  left: 50%;
  transform: translateX(-50%) translateZ(0);
  z-index: 2;
  animation: avatarFloat 3s ease-in-out infinite alternate, neonPulse 1.5s infinite alternate;
}

.card-avatar img {
  width: 90%;
  height: 90%;
  object-fit: cover;
  border-radius: 50%;
  animation: avatarImgGlow 2s infinite alternate;
}

@keyframes avatarFloat {
  0% { transform: translateX(-50%) translateY(0) translateZ(0); }
  50% { transform: translateX(-50%) translateY(-10px) translateZ(0); }
  100% { transform: translateX(-50%) translateY(0) translateZ(0); }
}

@keyframes avatarImgGlow {
  0% { box-shadow: 0 0 5px #0ff, 0 0 10px #0ff inset; }
  50% { box-shadow: 0 0 15px #f0f, 0 0 30px #f0f inset; }
  100% { box-shadow: 0 0 5px #0ff, 0 0 10px #0ff inset; }
}

/* العنوان */
.login-container h2 {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 1.6em;
  color: #0ff;
  text-shadow: 0 0 8px #0ff, 0 0 12px #0ff;
  animation: neonPulse 1.5s infinite alternate;
}

/* Inputs & select */
.login-container input,
.login-container select {
  width: 100%;
  padding: 14px;
  margin: 10px 0;
  border: 2px solid #0ff;
  border-radius: 12px;
  background: rgba(0,0,0,0.25);
  color: #fff;
  font-size: 1em;
  outline: none;
  transition: 0.3s, box-shadow 0.6s ease-in-out;
  appearance: none;
  animation: neonPulse 1.5s infinite alternate;
}

.login-container input:focus,
.login-container select:focus {
  border-color: #f0f;
  box-shadow: 0 0 10px #f0f,0 0 20px #f0f,0 0 35px #f0f,0 0 50px #f0f inset;
}

/* Button Neon */
.login-container button {
  width: 100%;
  padding: 14px;
  margin-top: 15px;
  border: none;
  border-radius: 12px;
  background: #0ff;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s, box-shadow 0.6s ease-in-out, transform 0.3s;
  box-shadow: 0 0 10px #0ff,0 0 20px #0ff inset;
  animation: neonPulse 1.5s infinite alternate;
}

.login-container button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 20px #0ff,0 0 40px #f0f inset;
}

/* Neon Pulse Keyframes */
@keyframes neonPulse {
  0% { box-shadow:0 0 5px #0ff,0 0 10px #0ff inset;color:#0ff;text-shadow:0 0 6px #0ff,0 0 10px #0ff; }
  50% { box-shadow:0 0 15px #f0f,0 0 30px #f0f inset;color:#f0f;text-shadow:0 0 10px #f0f,0 0 20px #f0f; }
  100% { box-shadow:0 0 5px #0ff,0 0 10px #0ff inset;color:#0ff;text-shadow:0 0 6px #0ff,0 0 10px #0ff; }
}

/* Responsive */
@media (max-width:480px){
  .login-container{padding:110px 20px 20px 20px;width:95%;}
  .login-container h2{font-size:1.3em;}
  .login-container input,.login-container select,.login-container button{font-size:0.95em;padding:12px;}
  }
