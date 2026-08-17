<main>

    <!-- Sección de Portada (Hero Section) -->
    <section class="hero-premium">
        <div class="overlay">
            <h1>Soluciones Técnicas Profesionales para Hogares y Empresas en Quito</h1>
            <p><strong>⚡ Electricidad • 🚿 Plomería • 💧 Impermeabilización • 🏢 Mantenimiento Integral</strong></p>
            <div class="botones">
                <a href="https://wa.me" class="btn-cta-principal" target="_blank" rel="noopener">
                    <i class="fa-brands fa-whatsapp"></i> Cotizar por WhatsApp
                </a>
                <a href="#seccion-interactiva" class="btn-cta-secundario">Explorar Servicios</a>
            </div>
        </div>
    </section>

    <!-- Beneficios Corporativos -->
    <section class="confianza">
        <h2 style="text-align: center; font-size: 30px; color: var(--dark);">¿Por qué elegir Vicmar Services?</h2>
        <div class="grid-clean">
            <div class="card-clean">
                <i class="fa-solid fa-circle-check" style="color:#25d366; font-size:22px;"></i> 
                <h4 style="margin:10px 0; color:var(--primary);">Atención Inmediata</h4> 
                Cobertura técnica veloz y eficiente en todo el distrito de Quito.
            </div>
            <div class="card-clean">
                <i class="fa-solid fa-shield-halved" style="color:var(--primary); font-size:22px;"></i> 
                <h4 style="margin:10px 0; color:var(--primary);">Garantía Real</h4> 
                Respaldamos con absoluta responsabilidad la durabilidad de cada obra técnica.
            </div>
            <div class="card-clean">
                <i class="fa-solid fa-user-gear" style="color:var(--accent); font-size:22px;"></i> 
                <h4 style="margin:10px 0; color:var(--primary);">Especialistas Calificados</h4> 
                Técnicos certificados listos para resolver emergencias residenciales y comerciales.
            </div>
        </div>
    </section>

    <!-- Catálogo de Servicios con Pestañas Interactivas por Clic -->
    <section class="servicios" id="seccion-interactiva">
        <h2 style="text-align: center; font-size: 30px; color: var(--dark);">Catálogo Rápido de Especialidades</h2>
        <p style="text-align: center; color: var(--text-muted); margin-bottom: 25px;">Haz clic en cada ícono para desplegar los detalles técnicos:</p>
        
        <div class="selector-servicios">
            <button class="btn-servicio active" onclick="filtrarService('elec', this)"><i class="fa-solid fa-bolt"></i> Electricidad</button>
            <button class="btn-servicio" onclick="filtrarService('plom', this)"><i class="fa-solid fa-faucet"></i> Plomería</button>
            <button class="btn-servicio" onclick="filtrarService('pint', this)"><i class="fa-solid fa-palette"></i> Pintura</button>
            <button class="btn-servicio" onclick="filtrarService('alum', this)"><i class="fa-solid fa-window-maximize"></i> Aluminio y Vidrio</button>
            <button class="btn-servicio" onclick="filtrarService('mante', this)"><i class="fa-solid fa-building-gear"></i> Mantenimiento</button>
            <button class="btn-servicio" onclick="filtrarService('imper', this)"><i class="fa-solid fa-droplet-slash"></i> Impermeabilización</button>
            <button class="btn-servicio" onclick="filtrarService('grif', this)"><i class="fa-solid fa-faucet-drip"></i> Grifería</button>
            <button class="btn-servicio" onclick="filtrarService('redes', this)"><i class="fa-solid fa-network-wired"></i> Redes y Datos</button>
        </div>

        <div class="contenedor-bloques">
            <article id="elec" class="bloque-servicio active">
                <h3>⚡ Electricidad Industrial y Residencial</h3>
                <p>Instalaciones eléctricas completas, diagnóstico y reparación experta de cortocircuitos, organización de tableros eléctricos principales, balanceo de fases y mantenimiento general seguro.</p>
                <a href="https://wa.me" class="btn-solicitar-bloque" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Solicitar Electricista Autorizado</a>
            </article>
            <article id="plom" class="bloque-servicio">
                <h3>🚿 Plomería y Redes Hidrosanitarias</h3>
                <p>Atención de emergencia para reparación de fugas no visibles con geófono, montajes sanitarios, lavado profundo de cisternas y destape mecánico de tuberías obstruidas.</p>
                <a href="https://wa.me" class="btn-solicitar-bloque" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Solicitar Plomero de Emergencia</a>
            </article>
            <article id="pint" class="bloque-servicio">
                <h3>🎨 Pintura Comercial y Residencial</h3>
                <p>Trabajos estéticos de pintura de alta gama para interiores o fachadas externas. Aplicación técnica rigurosa con selladores antihumedad para acabados de alta duración.</p>
                <a href="https://wa.me" class="btn-solicitar-bloque" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Solicitar Cotización de Pintura</a>
            </article>
            <article id="alum" class="bloque-servicio">
                <h3>🪟 Estructuras en Aluminio y Vidrio</h3>
                <p>Diseño, fabricación a medida e instalación estructural de ventanas panorámicas, puertas corredizas de aluminio, divisiones de oficina y mamparas templadas para baños.</p>
                <a href="https://wa.me" class="btn-solicitar-bloque" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Solicitar Presupuesto de Vidriería</a>
            </article>
            <article id="mante" class="bloque-servicio">
                <h3>🏢 Mantenimiento Preventivo y Correctivo</h3>
                <p>Planes técnicos periódicos y reparaciones inmediatas orientados a la correcta conservación de la infraestructura en oficinas comerciales, locales y edificios residenciales.</p>
                <a href="https://wa.me" class="btn-solicitar-bloque" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Agendar Visita Corporativa</a>
            </article>
            <article id="imper" class="bloque-servicio">
                <h3>💧 Impermeabilización de Superficies</h3>
                <p>Sistemas avanzados de aislamiento asfáltico y acrílico contra goteras, filtraciones críticas o humedades severas en terrazas abiertas, techos, losas y fachadas.</p>
                <a href="https://wa.me" class="btn-solicitar-bloque" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Solicitar Inspección de Humedades</a>
            </article>
            <article id="grif" class="bloque-servicio">
                <h3>🚰 Montaje e Instalación de Grifería</h3>
                <p>Montaje técnico y renovación profesional de conjuntos de grifería fina, mezcladoras monocomando, llaves de paso generales y accesorios utilitarios para baños y cocinas.</p>
                <a href="https://wa.me" class="btn-solicitar-bloque" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Agendar Cambio de Grifería</a>
            </article>
            <article id="redes" class="bloque-servicio">
                <h3>🔌 Redes de Datos y Cableado Estructurado</h3>
                <p>Instalación estructurada de cableado bajo norma Cat6, ponchado técnico de conectores en jacks y habilitación de puntos estables de internet para oficinas y hogares.</p>
                <a href="https://wa.me" class="btn-solicitar-bloque" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i> Instalar Puntos de Red Estables</a>
            </article>
        </div>
    </section>

    <!-- Galería de Evidencias -->
    <section class="trabajos">
        <h2 style="text-align: center; font-size: 30px; color: var(--dark);">Evidencia de Trabajos Realizados</h2>
        <div class="grid">
            <article class="card">
                <img src="img/trabajo1.jpg" alt="Electricidad" loading="lazy">
                <p><strong>Instalación eléctrica en Quito Norte</strong></p>
            </article>
            <article class="card">
                <img src="img/trabajo2.jpg" alt="Plomería" loading="lazy">
                <p><strong>Servicio urgente de plomería</strong></p>
            </article>
        </div>
    </section>

    <!-- Soporte Corporativo y Cobertura Local -->
    <section class="clientes">
        <h2 style="text-align: center; font-size: 30px; color: var(--dark);">Soporte Empresarial y Residencial</h2>
        <div class="grid-clean">
            <div class="card-clean">
                <h4 style="margin-top:0; color:var(--primary);">🏢 Asistencia Comercial</h4>
                <p style="margin:0; font-size:14px; line-height:1.6; color:var(--text-muted);">Ofrecemos asistencia técnica dedicada y contratos periódicos para oficinas, locales y edificios de departamentos.</p>
            </div>
            <div class="card-clean">
                <h4 style="margin-top:0; color:var(--primary);">📍 Cobertura Completa</h4>
                <p style="margin:0; font-size:14px; line-height:1.6; color:var(--text-muted);">Quito Norte, Centro, Sur, Calderón, Carcelén, Cumbayá, Tumbaco, Pomasqui y Mitad del Mundo.</p>
            </div>
        </div>
    </section>

    <!-- Preguntas Frecuentes -->
    <section class="faq">
        <h2 style="text-align: center; font-size: 30px; color: var(--dark);">Preguntas Frecuentes</h2>
        <details>
            <summary>¿Atienden emergencias y fines de semana?</summary>
            <p>Sí, cubrimos requerimientos técnicos de emergencia según disponibilidad y fines de semana coordinando con antelación.</p>
        </details>
        <details>
            <summary>¿Ofrecen visitas técnicas y garantía?</summary>

