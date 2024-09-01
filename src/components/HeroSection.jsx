import heroImg from '../assets/hero.jpg';
export default function HeroSection() {
  return (
    <div className='   bg-teal-600  h-screen flex  gap-x-10 '>
    <div className=' p-5'>
    <img className='h-96 rounded rounded-md shadow shadow-md  ' src={heroImg} >

</img>
    </div>
    <div  className=' '>
    <h1 className=' mb-4 text-7xl font-sans font-semibold'>Building Confidence 
    <span className='block '>
    One Smile at a Time
    </span> </h1>
      <ul className=' list-disc px-5'>
        <li>
        Making smiles fun for the whole family!
        </li>
        <li>
        Gentle and compassionate care for children of all ages.
        </li>
        <li>
        Experienced dentists who are passionate about their work.
        </li>
      </ul>
    </div>
       
    </div>
  )
}
