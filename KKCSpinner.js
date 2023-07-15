class Spinner extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          display: block;
        }
        :host svg path#Top_Flag {
          animation-name: spin;
          animation-duration: .5s;
          animation-iteration-count: 1;
          animation-timing-function: linear;
          fill: var(--font-color);
        }
        :host svg path#Bottom_Right_Flag {
          animation-name: spin;
          animation-duration: .5s;
          animation-iteration-count: 1;
          animation-timing-function: linear;
          fill: var(--font-color);
          animation-delay: .5s;
        }

        :host svg path#Bottom_Left_Flag {
          animation-name: spin;
          animation-duration: .5s;
          animation-iteration-count: 1;
          animation-timing-function: linear;
          fill: var(--font-color);
          animation-delay: 1s;
        }

        @keyframes spin {
          0% {
            fill: inherit;
          }
          50% {
            fill: transparent;
          }
          100% {
            fill: inerhit;
          }
        }
      </style>
      <svg width="${this.getAttribute('width') ?? 30}" height="${this.getAttribute('height') ?? 30}" version="1.1" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path id="Center_Hole" d="m8.0008 7.5058c-0.87374 0-1.5879 0.71415-1.5879 1.5879 0 0.87374 0.71415 1.5859 1.5879 1.5859 0.87374 0 1.5859-0.7122 1.5859-1.5859 0-0.87374-0.7122-1.5879-1.5859-1.5879zm0 0.45508c0.62773 0 1.1309 0.50509 1.1309 1.1328 0 0.62773-0.50313 1.1309-1.1309 1.1309s-1.1328-0.50313-1.1328-1.1309c1e-7 -0.62773 0.50509-1.1328 1.1328-1.1328z" color="#000000" style="-inkscape-stroke:none"/>
      <g stroke-width=".023855">
       <path id="Top_Flag" d="m7.6548 1.1317v0.51625h-1.4764v1.2371h1.4764v4.7212h0.55087v-6.4745z"/>
       <path id="Bottom_Right_Flag" d="m9.2955 9.9001-0.38964 0.38964 4.2132 4.2132 0.36484 0.36535 0.38959-0.3902-0.36484-0.36484 1.0439-1.0439-0.87486-0.87486-1.0439 1.0439z"/>
       <path id="Bottom_Left_Flag" d="m6.7045 9.9001-3.3383 3.3383-1.0439-1.0439-0.43253 0.43253-0.00982 0.0098-0.43253 0.43253 1.0439 1.0439-0.36484 0.36484 0.38959 0.3902 0.36484-0.36535 0.43253-0.43253 0.00982-0.0098 3.7708-3.7708z"/>
      </g>
     </svg>
      
    `;

    const shadow = this.attachShadow({mode: 'open'});
    shadow.appendChild(template.content.cloneNode(true));
  }
}

customElements.define('kkc-spinner', Spinner);
