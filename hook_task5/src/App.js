import "./App.css";
import React, { useState } from "react";
import Converter from "./Converter";
const contxt = React.createContext();
function App(props) {
  const allcurr = {
    USD: 1,
    AED: 3.67,
    AFN: 89.65,
    ALL: 114.89,
    AMD: 416.52,
    ANG: 1.79,
    AOA: 430.93,
    ARS: 129.2,
    AUD: 1.45,
    AWG: 1.79,
    AZN: 1.7,
    BAM: 1.92,
    BBD: 2,
    BDT: 93.51,
    BGN: 1.92,
    BHD: 0.376,
    BIF: 2041.89,
    BMD: 1,
    BND: 1.39,
    BOB: 6.86,
    BRL: 5.43,
    BSD: 1,
    BTN: 79.89,
    BWP: 12.77,
    BYN: 2.97,
    BZD: 2,
    CAD: 1.29,
    CDF: 1995.21,
    CHF: 0.971,
    CLP: 927.68,
    CNY: 6.76,
    COP: 4320.01,
    CRC: 680.46,
    CUP: 24,
    CVE: 108.08,
    CZK: 24.08,
    DJF: 177.72,
    DKK: 7.31,
    DOP: 54.4,
    DZD: 145.62,
    EGP: 18.91,
    ERN: 15,
    ETB: 52.32,
    EUR: 0.98,
    FJD: 2.2,
    FKP: 0.835,
    FOK: 7.31,
    GBP: 0.835,
    GEL: 2.81,
    GGP: 0.835,
    GHS: 8.18,
    GIP: 0.835,
    GMD: 54.18,
    GNF: 8647.13,
    GTQ: 7.73,
    GYD: 208.72,
    HKD: 7.85,
    HNL: 24.58,
    HRK: 7.39,
    HTG: 117.03,
    HUF: 389.49,
    IDR: 14970.46,
    ILS: 3.45,
    IMP: 0.835,
    INR: 79.89,
    IQD: 1456.1,
    IRR: 41932.77,
    ISK: 136.59,
    JEP: 0.835,
    JMD: 152.07,
    JOD: 0.709,
    JPY: 138.22,
    KES: 118.74,
    KGS: 80.09,
    KHR: 4076.83,
    KID: 1.45,
    KMF: 482.24,
    KRW: 1309.77,
    KWD: 0.3,
    KYD: 0.833,
    KZT: 482.03,
    LAK: 16037.93,
    LBP: 1507.5,
    LKR: 355.77,
    LRD: 152.54,
    LSL: 17.11,
    LYD: 4.88,
    MAD: 9.94,
    MDL: 19.3,
    MGA: 4123.89,
    MKD: 60.05,
    MMK: 1840.84,
    MNT: 3139.63,
    MOP: 8.09,
    MRU: 37.06,
    MUR: 44.69,
    MVR: 15.43,
    MWK: 1030.21,
    MXN: 20.52,
    MYR: 4.44,
    MZN: 64.11,
    NAD: 17.11,
    NGN: 415.06,
    NIO: 35.85,
    NOK: 9.96,
    NPR: 127.82,
    NZD: 1.6,
    OMR: 0.384,
    PAB: 1,
    PEN: 3.88,
    PGK: 3.55,
    PHP: 56.24,
    PKR: 225.69,
    PLN: 4.67,
    PYG: 6864.69,
    QAR: 3.64,
    RON: 4.84,
    RSD: 114.98,
    RUB: 55.22,
    RWF: 1044.14,
    SAR: 3.75,
    SBD: 8.04,
    SCR: 13,
    SDG: 532.63,
    SEK: 10.25,
    SGD: 1.39,
    SHP: 0.835,
    SLE: 13.85,
    SLL: 13848.83,
    SOS: 577.12,
    SRD: 22.62,
    SSP: 556.1,
    STN: 24.02,
    SYP: 2466.3,
    SZL: 17.11,
    THB: 36.69,
    TJS: 10.35,
    TMT: 3.49,
    TND: 3,
    TOP: 2.34,
    TRY: 17.6,
    TTD: 6.78,
    TVD: 1.45,
    TWD: 29.83,
    TZS: 2328.14,
    UAH: 30.35,
    UGX: 3798.79,
    UYU: 42.09,
    UZS: 10919.05,
    VES: 5.73,
    VND: 23411.77,
    VUV: 117.54,
    WST: 2.7,
    XAF: 642.98,
    XCD: 2.7,
    XDR: 0.758,
    XOF: 642.98,
    XPF: 116.97,
    YER: 250.15,
    ZAR: 17.11,
    ZMW: 16.48,
    ZWL: 394.22,
  };
  const [curr, setCurr] = useState(allcurr);
  const [show, setShow] = useState(0);
  const [inp, setInp] = useState("");
  const [amt, setAmt] = useState("");
  const [from, setFrom] = useState("");
  const [fromAmt, setFromAmt] = useState(0);
  const [to, setTo] = useState("");
  const [toAmt, setToAmt] = useState(0);
  const fromfunc = (e) => {
    var v = e.target.value;
    setFrom(v);
    Object.keys(curr).map((i) => {
      if (v == i) {
        setFromAmt(() => curr[i]);
      }
    });
  };
  const tofunc = (e) => {
    var v = e.target.value;
    setTo(v);
    Object.keys(curr).map((i) => {
      if (v == i) {
        setToAmt(curr[i]);
      }
    });
  };
  const getResults = () => {
    if (inp === "e" || inp === "") {
      alert("Enter valid entry");
    } else if (from === "" || to === "") {
      alert("Choose from both sides");
    } else {
      setAmt((toAmt / fromAmt) * inp);
      setShow(1);
    }
  };
  return (
    <contxt.Provider
      value={[
        curr,
        setCurr,
        show,
        setShow,
        inp,
        setInp,
        amt,
        setAmt,
        from,
        setFrom,
        fromAmt,
        setFromAmt,
        toAmt,
        setToAmt,
      ]}
    >
      <div className="main">
        <h3>Currency Converter</h3>
        <span>Enter amount</span>
        <input
          type="number"
          onChange={(e) => {
            setInp(e.target.value);
            setShow(0);
          }}
        />
        <div className="fromto">
          <ul className="leftul">
            <li>From</li>
            <li>
              <select onClick={fromfunc}>
                <option selected disabled>
                  select from
                </option>
                <option value="USD">USD</option>
                <option value="AED">AED</option>
                <option value="ARS">ARS</option>
                <option value="AUD">AUD</option>
                <option value="BGN">BGN</option>
                <option value="BRL">BRL</option>
                <option value="BSD">BSD</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CLP">CLP</option>
                <option value="CNY">CNY</option>
                <option value="COP">COP</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="DOP">DOP</option>
                <option value="EGP">EGP</option>
                <option value="EUR">EUR</option>
                <option value="FJD">FJD</option>
                <option value="GBP">GBP</option>
                <option value="GTQ">GTQ</option>
                <option value="HKD">HKD</option>
                <option value="HRK">HRK</option>
                <option value="HUF">HUF</option>
                <option value="IDR">IDR</option>
                <option value="ILS">ILS</option>
                <option value="INR">INR</option>
                <option value="ISK">ISK</option>
                <option value="JPY">JPY</option>
                <option value="KRW">KRW</option>
                <option value="KZT">KZT</option>
                <option value="MVR">MVR</option>
                <option value="MXN">MXN</option>
                <option value="MYR">MYR</option>
                <option value="NOK">NOK</option>
                <option value="NZD">NZD</option>
                <option value="PAB">PAB</option>
                <option value="PEN">PEN</option>
                <option value="PHP">PHP</option>
                <option value="PKR">PKR</option>
                <option value="PLN">PLN</option>
                <option value="PYG">PYG</option>
                <option value="RON">RON</option>
                <option value="RUB">RUB</option>
                <option value="SAR">SAR</option>
                <option value="SEK">SEK</option>
                <option value="SGD">SGD</option>
                <option value="THB">THB</option>
                <option value="TRY">TRY</option>
                <option value="TWD">TWD</option>
                <option value="UAH">UAH</option>
                <option value="UYU">UYU</option>
                <option value="ZAR">ZAR</option>
              </select>
            </li>
          </ul>

          <ul className="rightul">
            <li>To</li>
            <li>
              <select onClick={tofunc}>
                <option selected disabled>
                  select to
                </option>
                <option value="USD">USD</option>
                <option value="AED">AED</option>
                <option value="ARS">ARS</option>
                <option value="AUD">AUD</option>
                <option value="BGN">BGN</option>
                <option value="BRL">BRL</option>
                <option value="BSD">BSD</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CLP">CLP</option>
                <option value="CNY">CNY</option>
                <option value="COP">COP</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="DOP">DOP</option>
                <option value="EGP">EGP</option>
                <option value="EUR">EUR</option>
                <option value="FJD">FJD</option>
                <option value="GBP">GBP</option>
                <option value="GTQ">GTQ</option>
                <option value="HKD">HKD</option>
                <option value="HRK">HRK</option>
                <option value="HUF">HUF</option>
                <option value="IDR">IDR</option>
                <option value="ILS">ILS</option>
                <option value="INR">INR</option>
                <option value="ISK">ISK</option>
                <option value="JPY">JPY</option>
                <option value="KRW">KRW</option>
                <option value="KZT">KZT</option>
                <option value="MVR">MVR</option>
                <option value="MXN">MXN</option>
                <option value="MYR">MYR</option>
                <option value="NOK">NOK</option>
                <option value="NZD">NZD</option>
                <option value="PAB">PAB</option>
                <option value="PEN">PEN</option>
                <option value="PHP">PHP</option>
                <option value="PKR">PKR</option>
                <option value="PLN">PLN</option>
                <option value="PYG">PYG</option>
                <option value="RON">RON</option>
                <option value="RUB">RUB</option>
                <option value="SAR">SAR</option>
                <option value="SEK">SEK</option>
                <option value="SGD">SGD</option>
                <option value="THB">THB</option>
                <option value="TRY">TRY</option>
                <option value="TWD">TWD</option>
                <option value="UAH">UAH</option>
                <option value="UYU">UYU</option>
                <option value="ZAR">ZAR</option>
              </select>
            </li>
          </ul>
        </div>
        <button onClick={getResults}>Click Me</button>
        {show == 1 ? (
          <>
            <p>
              {inp} {from} = {amt} {to}
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
    </contxt.Provider>
  );
}

export default App;
