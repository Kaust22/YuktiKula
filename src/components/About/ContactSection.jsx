import SocialIcons from '../../components/Layout/SocialIcons';

export default function ContactSection() {
  return (
    <div className="py-16 px-6 sm:px-8 lg:px-12 text-center">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-yellow-400 text-3xl lg:text-4xl font-bold mt-8 mb-6">
          Reach Us:
        </h3>
        <p className="text-white text-xl leading-relaxed mb-10">
          Plot No.2 <br />
          APJ Abdul Kalam Road, Knowledge Park 3<br />
          Greater Noida, Uttar Pradesh, India, 201306
        </p>

        <h3 className="text-yellow-400 text-3xl lg:text-4xl font-bold mt-12 mb-8">
          Connect with us on:
        </h3>
        <div className="scale-125 flex justify-center gap-8">
          <SocialIcons />
        </div>
      </div>
    </div>
  );
}