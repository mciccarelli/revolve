import { motion } from 'framer-motion';

export default ({ active }) => (
  <svg
    width="251px"
    height="251px"
    viewBox="0 0 251 251"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.g
      initial={false}
      animate={{ rotate: active ? 360 : 0 }}
      transition={{ duration: 3 }}
      fill="none"
      fillRule="evenodd"
    >
      <circle id="Oval" stroke="#FFFFFF" cx="125.5" cy="125.5" r="125" />
      <g id="TEXT" transform="translate(155.385554, 101.215588)" fill="#000000">
        <text
          id="B"
          transform="translate(85.166996, 9.000000) rotate(82.130000) translate(-85.166996, -9.000000) "
        >
          <tspan x="78.1669961" y="16">
            B
          </tspan>
        </text>
        <text
          id="U"
          transform="translate(86.164446, 24.644412) rotate(90.000000) translate(-86.164446, -24.644412) "
        >
          <tspan x="78.6644458" y="31.6444122">
            U
          </tspan>
        </text>
        <text
          id="S"
          transform="translate(85.155125, 39.615039) rotate(97.430000) translate(-85.155125, -39.615039) "
        >
          <tspan x="78.6551246" y="46.6150393">
            S
          </tspan>
        </text>
        <text
          id="I"
          transform="translate(83.204446, 50.164412) rotate(102.778733) translate(-83.204446, -50.164412) "
        >
          <tspan x="80.2205389" y="57.2287849">
            I
          </tspan>
        </text>
        <text
          id="N"
          transform="translate(79.774772, 62.217692) rotate(109.040000) translate(-79.774772, -62.217692) "
        >
          <tspan x="72.2747719" y="69.2176923">
            N
          </tspan>
        </text>
        <text
          id="E"
          transform="translate(73.492460, 76.985832) rotate(116.860000) translate(-73.492460, -76.985832) "
        >
          <tspan x="66.9924599" y="83.9858319">
            E
          </tspan>
        </text>
        <text
          id="S"
          transform="translate(65.988084, 89.668641) rotate(124.030000) translate(-65.988084, -89.668641) "
        >
          <tspan x="59.4880835" y="96.6686409">
            S
          </tspan>
        </text>
        <text
          id="S"
          transform="translate(57.124446, 101.039412) rotate(131.347777) translate(-57.124446, -101.039412) "
        >
          <tspan x="50.6306237" y="108.050818">
            S
          </tspan>
        </text>
        <text
          id="L"
          transform="translate(43.084446, 114.534412) rotate(141.072456) translate(-43.084446, -114.534412) "
        >
          <tspan x="37.0685668" y="121.502654">
            L
          </tspan>
        </text>
        <text
          id="A"
          transform="translate(31.364446, 122.894412) rotate(148.055247) translate(-31.364446, -122.894412) "
        >
          <tspan x="24.3525558" y="129.87403">
            A
          </tspan>
        </text>
        <text
          id="W"
          transform="translate(14.509446, 131.469412) rotate(158.304891) translate(-14.509446, -131.469412) "
        >
          <tspan x="4" y="138.458617">
            W
          </tspan>
        </text>
      </g>
    </motion.g>
    <g
      id="ICON"
      transform="translate(73.190000, 76.760000)"
      fill="#000000"
      fillRule="nonzero"
    >
      <path
        d="M75.66,20.48 L75.66,7.10542736e-15 L29,7.10542736e-15 L29,20.48 L0,20.48 L0,97.95 L104.58,97.95 L104.58,20.48 L75.66,20.48 Z M35.5,6.48 L69.16,6.48 L69.16,20.48 L35.5,20.48 L35.5,6.48 Z M72.41,44.31 C74.8174596,44.31 76.9876755,45.7607587 77.9080334,47.9853493 C78.8283914,50.2099399 78.3174991,52.7699237 76.613737,54.4708224 C74.9099748,56.1717211 72.3491352,56.6783065 70.1260959,55.7542079 C67.9030567,54.8301093 66.4559538,52.6574562 66.4599915,50.25 C66.4710279,46.9733353 69.1333214,44.3244651 72.41,44.33 L72.41,44.31 Z M32.25,44.3099916 C34.6592735,44.3059644 36.8331844,45.7552395 37.7561013,47.9807371 C38.6790181,50.2062346 38.1687564,52.7686398 36.4637058,54.47082 C34.7586552,56.1730001 32.1953939,56.6789437 29.9714545,55.7522784 C27.7475152,54.825613 26.301905,52.6492633 26.3099662,50.24 C26.3319561,46.9734333 28.983364,44.3354164 32.25,44.33 L32.25,44.3099916 Z M98.08,91.43 L6.54,91.43 L6.54,26.98 L29,26.98 L29,38.24 C22.9741022,39.8695263 19.0864731,45.7095988 19.908392,51.8975912 C20.7303109,58.0855835 26.0076607,62.7083194 32.25,62.7083194 C38.4923393,62.7083194 43.7696891,58.0855835 44.591608,51.8975912 C45.4135269,45.7095988 41.5258978,39.8695263 35.5,38.24 L35.5,26.98 L69.16,26.98 L69.16,38.24 C63.1397929,39.8693919 59.25662,45.7048325 60.078483,51.8872553 C60.9003461,58.0696782 66.173189,62.6879599 72.41,62.6879599 C78.646811,62.6879599 83.9196539,58.0696782 84.741517,51.8872553 C85.56338,45.7048325 81.6802071,39.8693919 75.66,38.24 L75.66,26.98 L98.08,26.98 L98.08,91.43 Z"
        id="Shape"
      />
    </g>

    <style jsx>{`
      svg {
        font-size: 18px;
        font-weight: 900;
      }
    `}</style>
  </svg>
);
