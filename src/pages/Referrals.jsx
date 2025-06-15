import React, {useState, useEffect} from 'react'
import { Header, Footer, BackButton, ProgressBar } from '../components'
import { useSelector } from 'react-redux';
import axios from 'axios';
import { BsFillGiftFill, BsFillPeopleFill } from "react-icons/bs";
import { fetchSubscriberReferralDetails } from '../services/SubscriberService';
import { FaInfoCircle } from "react-icons/fa";

const Referrals = () => {

  const subscriberData = useSelector((state) => state.subscriber.subscriberData)
  const [loading, setLoading] = useState(false);
  const [referralData, setReferralData] = useState('')
  const [refUrl, setRefUrl] = useState('http://localhost:5173/register?');

  const [text, setText] = useState("This is the text to copy");
  const [copied, setCopied] = useState(false);

  const handleCopy = async (referralCode) => {

    try {

      await navigator.clipboard.writeText(`${refUrl}ref=${referralCode}`);
      setCopied(true);
      //setTimeout(() => setCopied(false), 1000); // reset copied status after 2s
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  // load subscriber referral details
  const loadSubscriberReferralDetails = async () => {

    try {

      setLoading(true)
      const response = await fetchSubscriberReferralDetails(subscriberData.subscriberId)
      setReferralData(response);

      setLoading(false)

    }catch(e) {
      setLoading(false)
        console.error(e + e.message);
    }

  }

  // load referral details
  useEffect(() => {

    // load here
    loadSubscriberReferralDetails();

  }, [])

  return (
    <>
      <ProgressBar loading={loading} />
      <div className='md:max-w-[1250px] mx-auto my-6 mb-10'>

          <Header active="referrals" />

          <div className='mt-[85px] ml-[70px] mb-[10px]'>
            <BackButton to="/home" />
          </div>

          
          <div className='inner-display-box'>
            <div className='bg-[#f3f3f3] p-3 rounded-[1rem] mr-5'>
                <BsFillGiftFill className='text-primaryOrange text-[2rem]' />
            </div>
            <div className='flex-1'>
                <h1>Earn with Referrals </h1>
                <p className='text-[1.4rem] font-[400]'>Make easy rewards and earn bonus with your referrals</p>
            </div>
            <div>
                <ul className='bd-crumb'>
                <li className='text-copyrightBlue'>Home</li>

        </ul>
     </div>
          
          </div>

          <div className='flex mx-auto w-[90%] mt-6 gap-x-6'>
                <div className='referral-div w-[65%]'>
                    <h1>Get 10% Forever With Referrals</h1>

                    <h5 className='text-[#aba6a6] mt-2 text-[0.9rem]'>Earn a +10% bonus for every task your referrals complete – forever.</h5>

                    <h5 className='text-primaryOrange font-[500] text-[0.85rem] mt-[40px]'>How it Works</h5>

                    <ul className='text-[#928d8d] mt-2 text-[0.85rem] leading-[50px]'>
                        <li><span className='ref-list'>1</span> Share your Referral code with friends</li>
                        <li><span className='ref-list'>2</span> Invite friends to sign up: they get a +10% bonus for their first completed task</li>
                        <li><span className='ref-list'>3</span> You get a +10% bonus for every task your friends complete!</li>
                    </ul> 

                </div>
                <div  className='referral-div w-[35%]'>
                    <h4 className='text-right text-primaryBlue font-[500]'>Your Referral Details</h4>
                    <div className='bg-[#f6f6f6] mt-5 rounded-[2rem] py-3 px-5 w-full flex items-center justify-between'>
                        <div>
                            <h5 className='text-primaryOrange text-[0.8rem] font-[500]'>Bonus Earned</h5>
                            <h5 className='text-primaryBlue mt-1 font-[500] text-[1.2rem]'>₦{referralData.bonusEarned?.toFixed(2)}</h5>
                        </div>
                        <div className='text-right'>
                            <h5 className='text-primaryOrange text-[0.8rem]'>Total Referrals</h5>
                            <h5 className='flex items-center mt-1 justify-end gap-x-1'><BsFillPeopleFill className='text-primaryOrange text-[1.1rem]' /> {referralData.totalReferrer}</h5>
                        </div>
                    </div>

                    <div className='bg-[#f6f6f6] mt-8 rounded-[2rem] py-3 px-5 w-full flex items-center justify-between'>
                        <div>
                          <h6 className='text-blue-600 text-[1.3rem] font-[600]'>{subscriberData.referralCode}</h6>
                          <h5 className='text-primaryOrange text-[0.8rem]'>Your referral code</h5>
                        </div>
                        <button onClick={handleCopy(subscriberData.referralCode)} className='bg-primaryOrange text-white px-[10px] py-[3px] hover:bg-white hover:text-primaryOrange hover:border hover:border-primaryOrange rounded-[1rem] text-[0.75rem]'>Copy Link</button>
                    </div>

                    {copied &&
                      <div className='bg-[#d4edda] border-[#c3e6cb] flex justify-start gap-x-2 items-center text-[0.8rem] rounded-[0.6rem] py-[0.9rem] px-[0.9rem] my-[1rem] text-[#155764]'><FaInfoCircle /> Referral link copied to clipboard!</div>
                    }
                      
                </div>
          </div>



      </div>
      <Footer />
    </>
  )
}

export default Referrals