import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import BookTaxi from './pages/BookTaxi';
import Testimonials from './pages/Testimonials';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './components/Footer';
import Service from './pages/Service';
import OurFleet from './pages/OurFleet';
import OurNetwork from './pages/OurNetwork';
import GallerySection from './pages/GallerySection';
import TermsConditions from './pages/TermsConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TempoTravellerOnRent from './pages/Tempo-Traveller-On-Rent-in-Pune';

import Mahabaleshwar from './pages/Pune-to-Mahabaleshwar-Tempo-Traveller';
import Outstation from './pages/Pune-to-Outstation';
import MiniBus from './pages/Mini-Bus-on-Rent-in-pune';
import Seater from './pages/14-Seater-Tempo-Traveller';
import Seater17 from './pages/17 Seater-Bus-on-Rent';
import PuneShirdi from './pages/Pune-to-shirdi';
import SeaterRent from './pages/20-Seater-Bus-on-Rent';
import Seater25Tempo from './pages/25-Seater-Tempo-Traveller-Pune';
import TempoPimpari from './pages/Tempo-Traveller-on-Rent-in-impri-Chinchwad';
import Seater32 from './pages/32-Seater-Bus-Rent-in-Pune';
import Seater35 from './pages/35-Seater-Bus-on-Rent-in-Pune';
import Seater45 from './pages/45-Seater-Bus-on-Rent-in-Pune';
import Seater50 from './pages/50-Seater-Bus-On-Rent-in-Pune';
import NonAcBus from './pages/Non-Ac-Bus-Rental-Service-in-Pune';
import LuxuryBus from './pages/Luxury-Bus-Rental-in-Pune';
import LuxuryForceUrbania from './pages/Luxury-Force-Urbania-On-Rent-in-Pune';
import LuxuryForceUrbaniabus from './pages/Force-Urbania-Luxury-Mini-Bus-On-Rent';
import Seater1417 from './pages/14-17-20-25-Seater-Bus-on-in-Pune';
import TravelAgent from './pages/Travel-Agents-in-Pune-for-Mini-Bus-Hire';
import MahabaleshwarUrbania from './pages/Pune-to-Mahabaleshwar-Urbania-On-Rent';
import PuneBhimashankar from './pages/Pune-to-Bhimashankar-Jyotirlinga-Mini-Bus-Hire-in-Pune';
import TempoHire from './pages/Tempo-Traveller-Hire in-Pune';
import AshtavinayakUrbania from './pages/Force-Urbania-On-Rent-for-Ashtavinayak-Darshan';
import BusSchool from './pages/Bus-Hire-for-School-Trips-in-Pune';
import LocalBus from './pages/Pune-Local-Bus-onRent';
import Kharadibus from './pages/Bus-On-Rent-in-Kharadi-Pune';
import Hinjewadibus from './pages/Bus-on-Rent-in-Hinjewadi';
import BusWedding from './pages/Bus-Hire-For-Wedding-in-Pune';
import BusForCorporateEvents from './pages/Buses-For-Corporate-Events-in-Pune';
import BusReantalForSchoolTrip from './pages/Bus-Rentals-For-School-Trips-in-Pune';
import BusBookingForWeddingInPune from './pages/Bus-booking-for-wedding-in-Pune';
import BusBookingForMarriageInPune from './pages/Bus-Booking-for-Marriage-function-in-Pune';
import BusServiceForCorporatePune from './pages/Bus-Service-for-Corporate-Pune';
import BusOnRentForEventInPune from './pages/Bus-on-Rent-For-Event-in-Pune';
import BusRentalForTourPackagesInPune from './pages/Bus-Rental-for-Tour-Packages-in-Pune';
import BusHireForOutstationInPune from './pages/Bus-Hire-for-Outstation-in-Pune';
import PuneBusHireRentalService from './pages/Pune-Bus-Hire-Rental-Service';
import BusServiceForPicnicInPune from './pages/Bus-Service-for-Picnic-in-Pune';
import LuxuryBusRentalInPune from './pages/Luxury-Bus-Rental-in--Pune';
import PuneToJyotilingaDarshanBusHire from './pages/Pune-to-5-Jyotirlinga-Darshan-Bus-Hire';
import PuneToMumbaiDarshanBusOnRent from './pages/Pune-to-Mumbai-Darshan-Bus-On-Rent';
import BusOnRentInPimpariChinchwad from './pages/Bus-On-Rent-in-Pimpri-Chinchwad';
import BusHIreForSchoolTripnInPune from './pages/Bus-Hire -for-School-Trips-in--Pune';
import BusOnRentInPune from './pages/Bus-On-Rent-in-Pune';
import PuneLocalBusOnRent from './pages/Pune-Local-Bus-on-Rent';
import BusHireNearMe from './pages/Bus-Hire-Near-me-Pune';
import SearterBusOnOnRent from './pages/32,35,40,45,50-Seater-Bus-on-Rent-in-Pune';
import PuneToLonavalaBusHire from './pages/Pune-to-Lonavala-Bus-Hire';
import PuneSadeTeenShaktiPeethBusOnRent from './pages/Pune Sade Teen Shakti Peeth Bus on Rent';
import PuneToKonkanDarshanBusHire from './pages/Pune to Konkan Darshan Bus Hire';
import PuneToGoaBusHire from './pages/Pune to Goa Bus Hire';
import BusHireInPimpriChinchwad from './pages/Bus Hire in Pimpri Chinchwad';
import BusRentInHadapsar from './pages/Bus on Rent in Hadapsar';
import BusRentInKharadi from './pages/Bus On Rent in Kharadi Pune';
import Hinjewadi from './pages/Bus on Rent in Hinjewadi';
import PicnicInPune from './pages/Bus Hire for Picnic in Pune';
import CorporateTravels from './pages/Corporate Travels in Pune';
import JyotirlingaDarshan from './pages/12 Jyotirlinga Darshan Tour Package from Pune';
import PuneToRajasthan from './pages/Pune to Rajasthan Darshan Bus Package';
import ToristBusService from './pages/Tourist Bus Rental Services';
import MonthlyBusPune from './pages/Monthly Bus Hire Service in Pune';
import BusforKedarnath from './pages/Bus Hire For Kedarnath Trip';
import PuneTOAshtavinayak from './pages/Bus hire for Pune to Ashtavinayak';
import PuneMaharashtraDarshan from './pages/Bus hire for Pune to Maharashtra Darshan';
import ALlIndiaBus from './pages/Explore All India Bus Hire Services From Pune ';
import Blog from './pages/Blog';
import Packages from './pages/Packages';
import Carrer from './pages/Carrer';
import ScrollToTop from './components/ScrollToTop';
import ContactButtons from './components/ContactButtons';
import OfferingsSection from './pages/OfferingsSection';
import Enquiry from './pages/Enquiry copy';
import NotFound from './components/404Page';
import Volvobushireinpune from './pages/Volvo Bus Hire in Pune';
import Urbaniaonrentinmumbai from './pages/Urbania On Rent in Mumbai';
import Urbaniaonrentinlonavala from './pages/Urbania Rent in Lonavala';
import Tatawinger from './pages/Tata Winger On Rent in Pune';
import Seatertempo from './pages/17 Seater Tempo Traveller On Rent in Pune';


function App() {
  return (
   
    <Router basename='/Amruta-travels'>
      <ScrollToTop/>
     <Header />
  <ContactButtons/>
      <Routes>
        
        <Route path="/" element={<Home/>} />
        <Route path="*" element={<NotFound />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/term-condition" element={<TermsConditions/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/" element={<NotFound/>} />
        <Route path="/book-taxi" element={<BookTaxi />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/" element={<OfferingsSection/>} />
        <Route path="/our-fleet" element={<OurFleet />} />
        <Route path="/gallery" element={<GallerySection/>} />
        <Route path="/Packages" element={<Packages/>} />
        <Route path="/our-network" element={<OurNetwork />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />}  />
        <Route path="/enquiry" element={<Enquiry />}  />
        <Route path="/carrer" element={<Carrer/>}  />
        <Route path="/Tempo-Traveller-On-Rent" element={<TempoTravellerOnRent/>} />
        <Route path="/Pune-to-Mahabaleshwar-Tempo-Traveller" element={<Mahabaleshwar/>} /> 
        <Route path="/Pune-to-Outstation-Tempo-Traveller" element={<Outstation/>} /> 
        <Route path="/Mini-Bus-on-Rent-in-Pune" element={<MiniBus/>} /> 
        <Route path="/13-Seater-Tempo-Traveller-on-Rent" element={<Seater/>} /> 
        <Route path="/17-Seater-Tempo-Traveller-on-Rent" element={<Seatertempo/>} /> 
        <Route path="/17-Seater-Bus-on-Rent-Pune" element={<Seater17/>} /> 
        <Route path="/Pune-to-Shirdi-Tempo-Traveller" element={<PuneShirdi/>} /> 
        <Route path="/20-Seater-Bus-on-Rent-in-Pune" element={<SeaterRent/>} /> 
        <Route path="/25-Seater-Tempo-Traveller-on-Rent-in-Pune" element={<Seater25Tempo/>} /> 
        <Route path="/Tempo-Traveller-on-Rent-in-Pimpri-Chinchwad" element={<TempoPimpari/>} /> 
        <Route path="/32-Seater-Bus-Rent-in-Pune" element={<Seater32/>} /> 
        <Route path="/35-Seater-Bus-Rent-in-Pune" element={<Seater35/>} /> 
        <Route path="/45-Seater-Bus-Rent-in-Pune" element={<Seater45/>} /> 
        <Route path="/50-Seater-Bus-Rent-in-Pune" element={<Seater50/>} /> 
        <Route path="/Non-Ac-Bus-Rental-Service-in-Pune" element={<NonAcBus/>} /> 
        <Route path="/Luxury-Bus-Rental-in-Pune" element={<LuxuryBus/>} /> 
        <Route path="/Luxury-Force-Urbania-On-Rent-in-Pune" element={<LuxuryForceUrbania/>} /> 
        <Route path="/Force-Urbania-Luxury-Mini-Bus-On-Rent" element={<LuxuryForceUrbaniabus/>} /> 
        <Route path="/Bus-On-Rent-in-Pune" element={<BusOnRentInPune/>} /> 
        <Route path="/14-17-20-25-Seater-Bus-on-in-Pune" element={<Seater1417/>} /> 
        <Route path="/Travel-Agents-in-Pune-for-Mini-Bus-Hire" element={<TravelAgent/>} /> 
        <Route path="/Tempo-Traveller-Hire-in-Pune" element={<TempoHire/>} /> 
        <Route path="/Force-Urbania-On-Rent-for-Ashtavinayak-Darshan" element={<AshtavinayakUrbania/>} /> 
        <Route path="/Pune-to-Mahabaleshwar-Urbania-On-Rent" element={<MahabaleshwarUrbania/>} /> 
        <Route path="/Pune-to-Bhimashankar-Jyotirlinga-Mini-Bus-Hire-in-Pune" element={<PuneBhimashankar/>} /> 
        <Route path="/Bus-Hire-for-School-Trips-in-Pune" element={<BusSchool/>} /> 
        <Route path="/Pune-Local-Bus-on-Rent" element={<LocalBus/>} /> 
        <Route path="/Bus-On-Rent-in-Kharadi-Pune" element={<Kharadibus/>} /> 
        <Route path="/Bus-on-Rent-in-Hinjewadi" element={<Hinjewadibus/>} /> 
        <Route path="/Bus-Hire-For-Wedding-in-Pune" element={<BusWedding/>} /> 
        <Route path="/Buses-For-Corporate-Events-in-Pune" element={<BusForCorporateEvents/>} /> 
        <Route path="/Bus-Rentals-For-School-Trips-in-Pune" element={<BusReantalForSchoolTrip/>} /> 
        <Route path="/Bus-booking-for-wedding-in-Pune" element={<BusBookingForWeddingInPune/>} /> 
        <Route path="/Bus-Booking-for-Marriage-function-in-Pune" element={<BusBookingForMarriageInPune/>} /> 
        <Route path="/Bus-Service-for-Corporate-Pune" element={<BusServiceForCorporatePune/>} /> 
        <Route path="/Bus-on-Rent-For-Event-in-Pune" element={<BusOnRentForEventInPune/>} /> 
        <Route path="/Bus-Rental-for-Tour-Packages-in-Pune" element={<BusRentalForTourPackagesInPune/>} /> 
        <Route path="/Bus-Hire-for-Outstation-in-Pune" element={<BusHireForOutstationInPune/>} /> 
        <Route path="/Pune-Bus-Hire-Rental-Service" element={<PuneBusHireRentalService/>} /> 
        <Route path="/Bus-Service-for-Picnic-in-Pune" element={<BusServiceForPicnicInPune/>} /> 
        <Route path="/Luxury-Bus-Rental-in-Pune" element={<LuxuryBusRentalInPune/>} /> 
        <Route path="/Pune-to-5-Jyotirlinga-Darshan-Bus-Hire" element={<PuneToJyotilingaDarshanBusHire/>} /> 
        <Route path="/Pune-to-Mumbai-Darshan-Bus-On-Rent" element={<PuneToMumbaiDarshanBusOnRent/>} /> 
        <Route path="/Bus-On-Rent-in-Pimpri-Chinchwad" element={<BusOnRentInPimpariChinchwad/>} /> 
        <Route path="/Bus-Hire-for-School-Trips-in-Pune" element={<BusHIreForSchoolTripnInPune/>} /> 
        <Route path="/Bus-On-Rent-In-Pune" element={<BusOnRentInPune/>} /> 
        <Route path="/Pune-Local-Bus-On-Rent" element={<PuneLocalBusOnRent/>} /> 
        <Route path="/Bus-Hire-Near-Me" element={<BusHireNearMe/>} /> 
        <Route path="/32-35-40-45-50-Seater-Bus-on-Rent-in-Pune" element={<SearterBusOnOnRent/>} /> 
        <Route path="/Pune-To-Lonavala-Bus-Hire" element={<PuneToLonavalaBusHire/>} /> 
        <Route path="/Pune-Sade-Teen-Shakti-Peeth-Bus-On-Rent" element={<PuneSadeTeenShaktiPeethBusOnRent/>} /> 
        <Route path="/Pune-To-Konkan-Darshan-Bus-Hire" element={<PuneToKonkanDarshanBusHire/>} /> 
        <Route path="/Pune-To-Goa-Bus-Hire" element={<PuneToGoaBusHire/>} /> 
        <Route path="/Bus-Hire-In-Pimpri-Chinchwad" element={<BusHireInPimpriChinchwad/>} /> 
        <Route path="/Bus-Rent-In-Hadapsar" element={<BusRentInHadapsar/>} /> 
        <Route path="/bus-on-rent-in-kharadi" element={<BusRentInKharadi/>} /> 
        <Route path="/bus-on-rent-in-hinjewadi" element={<Hinjewadi/>} /> 
        <Route path="/bus-hire-for-picnic-in-pune" element={<PicnicInPune/>} /> 
        <Route path="/corporate-travels-in-pune" element={<CorporateTravels/>} /> 
        <Route path="/12-Jyotirlinga-Darshan-Tour-Package-from-Pune" element={<JyotirlingaDarshan/>} /> 
        <Route path="/Pune-to-rajasthan-darshan-bus-package" element={<PuneToRajasthan/>} /> 
        <Route path="/Tourist-Bus-Rental-Services" element={<ToristBusService/>} /> 
        <Route path="/Monthly-Bus-Hire-Service-in-Pune" element={<MonthlyBusPune/>} /> 
        <Route path="/Bus-Hire-For-Kedarnath-Trip" element={<BusforKedarnath/>} /> 
        <Route path="/Bus-hire-for-Pune-to-Ashtavinayak" element={<PuneTOAshtavinayak/>} /> 
        <Route path="/Bus-hire-for-Pune-to-Maharashtra-Darshan" element={<PuneMaharashtraDarshan/>} /> 
        <Route path="/Explore-All-India-Bus-Hire-Services-From-Pune" element={<ALlIndiaBus/>} /> 
        <Route path="/Volvo-Bus-Hire-in-Pune" element={<Volvobushireinpune/>} /> 
        <Route path="/Urbania-On-Rent-in-Mumbai" element={<Urbaniaonrentinmumbai/>} /> 
        <Route path="/Urbania-Rent-in-Lonavala" element={<Urbaniaonrentinlonavala/>} /> 
        <Route path="/Tata-Winger-On-Rent-in-Pune" element={<Tatawinger/>} /> 
        {/* <Route path="*" element={<NotFound />} /> */}

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
