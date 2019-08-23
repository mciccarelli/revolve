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
      <g id="TEXT" transform="translate(188.533137, 30.552016)" fill="#000000">
        <text
          id="C"
          transform="translate(21.145187, 15.000000) rotate(46.270000) translate(-21.145187, -15.000000) "
        >
          <tspan x="13.1451875" y="22">
            C
          </tspan>
        </text>
        <text
          id="I"
          transform="translate(29.300871, 24.573463) rotate(52.630000) translate(-29.300871, -24.573463) "
        >
          <tspan x="26.3008706" y="31.5734626">
            I
          </tspan>
        </text>
        <text
          id="V"
          transform="translate(36.056751, 34.464168) rotate(58.650000) translate(-36.056751, -34.464168) "
        >
          <tspan x="29.0567515" y="41.4641676">
            V
          </tspan>
        </text>
        <text
          id="I"
          transform="translate(41.907318, 45.303413) rotate(64.660000) translate(-41.907318, -45.303413) "
        >
          <tspan x="38.9073181" y="52.3034131">
            I
          </tspan>
        </text>
        <text
          id="L"
          transform="translate(46.096863, 55.437984) rotate(70.114835) translate(-46.096863, -55.437984) "
        >
          <tspan x="40.099264" y="62.4427846">
            L
          </tspan>
        </text>
        <text
          id="L"
          transform="translate(51.095562, 73.712830) rotate(79.220000) translate(-51.095562, -73.712830) "
        >
          <tspan x="45.0955622" y="80.7128303">
            L
          </tspan>
        </text>
        <text
          id="I"
          transform="translate(52.576863, 83.917984) rotate(84.289407) translate(-52.576863, -83.917984) "
        >
          <tspan x="49.5619008" y="90.8581329">
            I
          </tspan>
        </text>
        <text
          id="T"
          transform="translate(53.076863, 95.377984) rotate(90.000000) translate(-53.076863, -95.377984) "
        >
          <tspan x="46.5768635" y="102.377984">
            T
          </tspan>
        </text>
        <text
          id="I"
          transform="translate(52.511347, 106.455581) rotate(95.590000) translate(-52.511347, -106.455581) "
        >
          <tspan x="49.5113468" y="113.455581">
            I
          </tspan>
        </text>
        <text
          id="G"
          transform="translate(50.505462, 119.305831) rotate(101.970000) translate(-50.505462, -119.305831) "
        >
          <tspan x="42.5054618" y="126.305831">
            G
          </tspan>
        </text>
        <text
          id="A"
          transform="translate(45.920397, 135.113199) rotate(110.320000) translate(-45.920397, -135.113199) "
        >
          <tspan x="38.9203968" y="142.113199">
            A
          </tspan>
        </text>
        <text
          id="T"
          transform="translate(40.016863, 148.482984) rotate(117.332359) translate(-40.016863, -148.482984) "
        >
          <tspan x="33.5048496" y="155.460804">
            T
          </tspan>
        </text>
        <text
          id="I"
          transform="translate(34.422399, 158.053870) rotate(122.830000) translate(-34.422399, -158.053870) "
        >
          <tspan x="31.4223987" y="165.05387">
            I
          </tspan>
        </text>
        <text
          id="O"
          transform="translate(26.443851, 168.959279) rotate(129.280000) translate(-26.443851, -168.959279) "
        >
          <tspan x="17.9438512" y="175.959279">
            O
          </tspan>
        </text>
        <text
          id="N"
          transform="translate(14.486863, 181.442984) rotate(137.842138) translate(-14.486863, -181.442984) "
        >
          <tspan x="7" y="188.464002">
            N
          </tspan>
        </text>
      </g>
    </motion.g>
    <g
      id="ICON"
      transform="translate(69.380000, 76.760000)"
      fill="#000000"
      fillRule="nonzero"
    >
      <rect id="Rectangle" x="14.68" y="0" width="82.88" height="6.5" />
      <rect id="Rectangle" x="31.51" y="26.8" width="6.5" height="78.43" />
      <rect id="Rectangle" x="45.75" y="26.8" width="6.5" height="78.43" />
      <rect id="Rectangle" x="59.99" y="26.8" width="6.5" height="78.43" />
      <rect id="Rectangle" x="74.23" y="26.8" width="6.5" height="78.43" />
      <path
        d="M99.79,13.4 L12.45,13.4 C5.57405486,13.4 0,18.9740549 0,25.85 C0,32.7259451 5.57405486,38.3 12.45,38.3 C19.3259451,38.3 24.9,32.7259451 24.9,25.85 C24.9121722,23.7532391 24.3889948,21.6880652 23.38,19.85 L88.86,19.85 C87.8510052,21.6880652 87.3278278,23.7532391 87.34,25.85 C87.34,32.7259451 92.9140549,38.3 99.79,38.3 C106.665945,38.3 112.24,32.7259451 112.24,25.85 C112.24,18.9740549 106.665945,13.4 99.79,13.4 L99.79,13.4 Z M12.45,31.79 C9.16925587,31.7624253 6.52993803,29.0844059 6.55000565,25.803608 C6.57030324,22.5228101 9.24236903,19.8774649 12.5232041,19.8902092 C15.8040392,19.9030458 18.4553982,22.5691444 18.4500082,25.85 C18.4473921,27.4350055 17.8124858,28.9534607 16.6860984,30.0685843 C15.559711,31.1837078 14.0349517,31.8033215 12.45,31.79 Z M99.79,31.79 C96.5092559,31.7624253 93.869938,29.0844059 93.8900057,25.803608 C93.9103032,22.5228101 96.582369,19.8774649 99.8632041,19.8902092 C103.144039,19.9030458 105.795398,22.5691444 105.790008,25.85 C105.787392,27.4350055 105.152486,28.9534607 104.026098,30.0685843 C102.899711,31.1837078 101.374952,31.8033215 99.79,31.79 L99.79,31.79 Z"
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
