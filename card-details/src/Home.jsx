import { useEffect, useState } from "react";

const Home = () => {

    const [year, setYear] = useState('');
    const [month, setMonth] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [details, setDetails] = useState('');
    const [name, setName] = useState('');
    const [summit, setSummit] = useState(false);
    const [error, setError] = useState('');

    
    
      const handlesummit = () => {
        
        setSummit(true);

      };
    



    const handleInputChange = (e) => {
        const inputval = e.target.value;
  
        if (inputval === '') {
        setInputValue('');
        return;
        }
        if (inputval.length <= 3 && inputval >= 1 && inputval <= 1000) {
        setInputValue(inputval);
        }
    };

  
    const handleInputName = (e) => {
        const inputValue = e.target.value;
        const pattern = /^[A-Z\s]*$/; 
    
        if (pattern.test(inputValue)) {
          setName(inputValue);
        }
    };          
      

    const handlecarddetails = (inputdetails) => {

        setDetails(inputdetails.substring(0, 16).replace(/(\d{4})(?=\d)/g, '$1 ').trim());

        if (/[^\d\s]/g.test(inputdetails)) {
            setError('Wrong format, numbers only!');
            return;
        }

        const cleaned = inputdetails.replace(/\D/g, '');
      
        const limited = cleaned.substring(0, 16);
      
        const formatted = limited.replace(/(\d{4})(?=\d)/g, '$1 ');
      
        setDetails(formatted.trim());
      
        if (formatted.length === 19) {
          const pattern = /^\d{4} \d{4} \d{4} \d{4}$/;
      
          if (!formatted.match(pattern)) {
            console.warn("Invalid input format");
          }
        } else if (limited.length < 16) {
          console.warn("Incomplete input");
        }
    };
  
  
    const handleMonthChange = (e) => {
      const inputMonth = e.target.value;
  
      if (inputMonth === '') {
        setMonth('');
        return;
      }
      if (inputMonth.length <= 2 && inputMonth >= 1 && inputMonth <= 12) {
        setMonth(inputMonth);
      }
    };
  
    const handleYearChange = (e) => {
        const inputYear = e.target.value;

        if (inputYear === '') {
            setYear('');
            return;
        }
        if (inputYear.length <= 4 && inputYear >= 1 && inputYear <= 2028) {
        setYear(inputYear);
        }
    };


    return ( 
        <div className="md:flex md:overflow-hidden">
            <div className=" relative font-Grotesk">
                <img className="hidden relative h-screen md:block" src="/images/bg-main-desktop.png" />
                <img className="relative md:hidden w-screen " src="/images/bg-main-mobile.png" />
                
                
                <div className="absolute w-9/12 md:w-full top-11 md:-right-48 right-5 md:top-97">
                    <img className="relative" src="/images/bg-card-back.png" />
                    <h1 className="z-50 absolute md:top-24.5 md:right-14 top-20.5 text-xs right-10  text-white">{inputValue || '000'}</h1>
                </div>


                <div className="absolute w-9/12 md:w-full md:top-36 md:left-28 -bottom-12 left-5 tracking-widest">
                    <img className="relative" src="/images/bg-card-front.png" />
                    <img className="z-50 absolute top-5 left-7 w-16" src="/images/card-logo.svg" />
                    <h1 className="z-50 absolute top-21 md:top-29 text-xl md:text-3xl md:left-6 left-7 text-white">{details || '0000 0000 0000 0000'}</h1>
                    <h1 className="absolute z-50 md:top-44 bottom-5 text-xs text-white left-7">{name || 'JANE APPLESEED'}</h1>
                    <h1 className="absolute z-50 bottom-5 md:top-44 text-xs text-white right-7"> 
                        {month && year ? `${month}/${year}` :
                        month ? `${month}/00` :
                        year ? `00/${year}` :
                        '00/00'}
                    </h1>
                </div>

            </div>

            <div className="pt-28 md:flex-col md:text-sm md:top-24 items-center md:relative left-80">
                <form >
                    <div className={`grid md:gap-8 gap-6 ${summit ? `hidden` : `block`}`}>
                    <div>
                        <label className="pl-5  text-Very-dark-violet font-semibold tracking-widest">CARDHOLDER NAME</label><br/>
                        <div className="flex justify-center pt-2">
                            <input type="text" 
                            onChange={handleInputName} 
                            minLength={6} maxLength={15} 
                            value={name} placeholder="e.g. Jane Appleseed" 
                            className="border-2 w-11/12 rounded-lg p-3 md:text-sm text-xl outline-none" required/>
                        </div>
                    </div>

                    <div>
                        <label className="pl-5 text-Very-dark-violet font-semibold tracking-widest">CARD NUMBER</label><br/>
                        <div className="flex justify-center pt-2">
                            <input type="text" 
                            value={details} onChange={(e) => handlecarddetails(e.target.value)} 
                            pattern="{1234} {5678} {9123} {0000}" placeholder="e.g. 1234 5678 9123 0000" 
                            className="border-2 w-11/12 rounded-lg p-3 md:text-sm text-xl outline-none" required/>
                        </div>
                        <h1>{error && <span className="text-red-500">{error}</span>}</h1>
                    </div>

                    <div>

                        <div className="flex justify-items-center">
                            <label className="pl-5 text-Very-dark-violet font-semibold tracking-widest">
                                EXP. DATE (MM/YY)
                            </label><br/>
                            <label className="pl-8 text-Very-dark-violet font-semibold tracking-widest">CVC</label><br/>
                        </div>

                        <div className="flex justify-items-center">
                            <div className="flex pt-2 pl-5 gap-2">
                                <input
                                    type="number"
                                    placeholder="MM"
                                    value={month}
                                    onChange={handleMonthChange}
                                    min={1}
                                    max={12}
                                    className="outline-none border-2 md:text-sm rounded-lg p-3 pl-4 pr-7 text-xl"
                                />

                                <input
                                    type="number"
                                    placeholder="YY"
                                    value={year}
                                    onChange={handleYearChange}
                                    min={2022}
                                    max={2027}
                                    className="outline-none border-2 md:text-sm rounded-lg pl-4 p-3 text-xl"
                                />
                            </div>

                            <div className="flex items-center pl-4  pt-2">
                                <input type="text" placeholder="e.g. 123" 
                                    className="border-2 w-11/12 rounded-lg p-3 md:text-sm text-xl outline-none" 
                                    value={inputValue}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    </div>
                </form>


                    <div className={`flex justify-center pt-9 md:pt-10  ${summit ? `hidden` : `block`}`}>
                        <button onClick={handlesummit} className="w-11/12 bg-Very-dark-violet p-4 text-xl md:text-sm font-semibold text-white rounded-lg">Confirm</button>
                    </div>

                    <div className={`text-Very-dark-violet tracking-widest text-center md:relative top-16 grid md:gap-4 gap-10 ${summit ? 'block' : `hidden`}`}>
                        <div className="flex justify-center">
                        <img src="/images/icon-complete.svg" />
                        </div>
                        <h1 className="text-4xl md:text-2xl font-bold">THANK YOU!</h1>
                        <h1 className="text-lg md:text-sm font-semibold text-Dark-grayish-violet">We've added your card details</h1>
                        <form className="flex justify-center pt-4">
                        <button className="w-11/12 md:w-80 bg-Very-dark-violet p-4 text-xl md:text-sm font-semibold text-white rounded-lg">Continue</button>
                    </form>
                    </div>


                    
            </div>

        </div>
     );
}
 
export default Home;