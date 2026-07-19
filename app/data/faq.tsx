import React from 'react';

export const faqs = [
  {
    question: "What time is check-in and check-out?",
    answer: (
      <div className="space-y-4">
        <h4 className="font-serif text-xl flex items-center gap-2 text-pine-charcoal">Check-in & Check-out Times</h4>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong className="text-pine-charcoal font-medium">Check-in:</strong> From 1:00 PM onwards</li>
          <li><strong className="text-pine-charcoal font-medium">Check-out:</strong> Until 12:00 PM (Noon)</li>
        </ul>

      </div>
    )
  },
  {
    question: "Do you offer complimentary breakfast?",
    answer: (
      <div className="space-y-4">
        <h4 className="font-serif text-xl flex items-center gap-2 text-pine-charcoal">Complimentary Breakfast</h4>
        <p>A <strong className="text-pine-charcoal font-medium">complimentary continental breakfast</strong> is included with your stay.</p>

        <div className="space-y-2 mt-6">
          <h5 className="font-serif text-lg text-pine-charcoal">Alternative Breakfast Options</h5>
          <p>You may also choose one of the following instead:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Puri Bhaji</li>
            <li>Aloo Paratha</li>
          </ul>
        </div>

        <div className="bg-pine-accent/10 border-l-4 border-pine-accent p-4 rounded-r-md mt-6">
          <strong className="text-pine-charcoal font-medium">Please inform our staff by 6:00 PM on your check-in day</strong> if you would like one of these alternatives.
        </div>
      </div>
    )
  },
  {
    question: "Do you provide lunch or dinner?",
    answer: (
      <div className="space-y-4">
        <h4 className="font-serif text-xl flex items-center gap-2 text-pine-charcoal">Home-cooked Meals</h4>
        <p>We offer simple, home-cooked meals for lunch and dinner.</p>
        <div className="bg-pine-accent/10 border-l-4 border-pine-accent p-4 rounded-r-md">
          <strong className="text-pine-charcoal">Please place your order at least 4 hours in advance.</strong>
        </div>

        <div className="space-y-2 mt-6">
          <h5 className="font-serif text-lg text-pine-charcoal">Vegetarian Meal — ₹250</h5>
          <ul className="list-disc pl-5 space-y-1">
            <li>Rice</li>
            <li>Dal</li>
            <li>2 Vegetable Dishes</li>
            <li>Salad</li>
            <li>Chutney/Pickle</li>
            <li>Papad</li>
          </ul>
        </div>

        <div className="space-y-2 mt-6">
          <h5 className="font-serif text-lg text-pine-charcoal">Non-Vegetarian Meal — ₹350</h5>
          <ul className="list-disc pl-5 space-y-1">
            <li>Rice</li>
            <li>Dal</li>
            <li>Chicken or Fish</li>
            <li>1 Vegetable Dish</li>
            <li>Salad</li>
            <li>Chutney/Pickle</li>
          </ul>
        </div>

        <div className="space-y-2 mt-6">
          <h5 className="font-serif text-lg text-pine-charcoal">Roti</h5>
          <p>Roti is available on request. Please let us know in advance if you would like roti and specify the quantity required.</p>
        </div>
      </div>
    )
  },
  {
    question: "Do you offer laundry services?",
    answer: (
      <div className="space-y-4">
        <h4 className="font-serif text-xl flex items-center gap-2 text-pine-charcoal">Laundry Service</h4>
        <p>We offer a convenient <strong className="text-pine-charcoal font-medium">wash, dry, and fold</strong> laundry service.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-pine-charcoal font-medium">Price:</strong> ₹200 per load</li>
          <li><strong className="text-pine-charcoal font-medium">Load Size:</strong> 5–8 clothing items per load</li>
        </ul>
      </div>
    )
  },
  {
    question: "Is there parking available at the property?",
    answer: "Yes, we offer free parking for our guests on the premises. Please let us know in advance if you require a parking spot."
  },
  {
    question: "Are pets allowed at Pine Air Shillong?",
    answer: "While we love animals, we do not allow pets on the property to ensure the comfort of all our guests."
  },
  {
    question: "How far is Pine Air Shillong from the city center?",
    answer: "We are located in a peaceful residential neighborhood of Mawlai Mawroh, approximately a 5-minute walk from the Golf Course and a short drive to the main city center and attractions."
  },
  {
    question: "Is Wi-Fi available?",
    answer: (
      <div className="space-y-4">
        <h4 className="font-serif text-xl flex items-center gap-2 text-pine-charcoal">Wi-Fi</h4>
        <p>Complimentary <strong className="text-pine-charcoal font-medium">100 Mbps Wi-Fi</strong> is available throughout the property.</p>
      </div>
    )
  },
  {
    question: "Is there a power backup available?",
    answer: (
      <div className="space-y-4">
        <h4 className="font-serif text-xl flex items-center gap-2 text-pine-charcoal">Power Backup</h4>
        <p>To ensure your comfort during occasional power outages, especially in the winter months, Pine Air is equipped with a <strong className="text-pine-charcoal font-medium">heavy-duty backup generator</strong>.</p>
        <div className="bg-pine-accent/10 border-l-4 border-pine-accent p-4 rounded-r-md mt-6">
          <strong className="text-pine-charcoal font-medium">Please note:</strong> The generator is operated whenever required, but it cannot be run continuously throughout the night.
        </div>
      </div>
    )
  },
  {
    question: "Is there a café or restaurant on the premises?",
    answer: (
      <div className="space-y-4">
        <h4 className="font-serif text-xl flex items-center gap-2 text-pine-charcoal">Serendipity Café</h4>
        <p><strong className="text-pine-charcoal font-medium">Serendipity Café</strong> is located within the Pine Air premises and operates as an independent business.</p>
        <p>The café serves a selection of <strong className="text-pine-charcoal font-medium">traditional Khasi snacks</strong>, lunch, and a variety of teas.</p>

        <div className="space-y-2 mt-6">
          <h5 className="font-serif text-lg text-pine-charcoal">Opening Hours</h5>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong className="text-pine-charcoal font-medium">Monday – Saturday</strong></li>
            <li><strong className="text-pine-charcoal font-medium">11:00 AM – 7:00 PM</strong></li>
          </ul>
        </div>

        <div className="space-y-2 mt-6">
          <h5 className="font-serif text-lg text-pine-charcoal">Contact</h5>
          <p>For any café-related enquiries, please contact:</p>
          <div className="bg-white border border-pine-primary/10 p-4 rounded-lg mt-2 inline-block shadow-sm">
            <p className="font-medium text-pine-charcoal text-lg">Ms. Darhmingliani (Ming)</p>
            <p className="flex items-center gap-2 mt-2 text-pine-gray"><strong className="text-pine-charcoal text-lg tracking-wide">87874 41451</strong></p>
          </div>
        </div>
      </div>
    )
  },
  {
    question: "Is there an ATM nearby?",
    answer: (
      <div className="space-y-4">
        <h4 className="font-serif text-xl flex items-center gap-2 text-pine-charcoal">Nearby ATM</h4>
        <p>There is only one <strong className="text-pine-charcoal font-medium">SBI ATM</strong> located just ahead of <strong className="text-pine-charcoal font-medium">Gateau – Bakes and More BAKERY</strong> (within walking distance).</p>
      </div>
    )
  },
  {
    question: "Are there any resident pets or dogs on the property?",
    answer: (
      <div className="space-y-4">
        <h4 className="font-serif text-xl flex items-center gap-2 text-pine-charcoal">Our Dogs</h4>

        <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden my-4 shadow-sm border border-pine-primary/5">
          <img
            src="/images/dogs.png"
            alt="Witty, Lexi, and Phup-Phup - Our resident dogs"
            className="w-full h-full object-cover"
          />
        </div>

        <p>Pine Air is home to three friendly dogs:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong className="text-pine-charcoal font-medium">Witty</strong> (Female)</li>
          <li><strong className="text-pine-charcoal font-medium">Lexi</strong> (Female)</li>
          <li><strong className="text-pine-charcoal font-medium">Phup-Phup</strong> (Male) – our resident superstar!</li>
        </ul>
        <p>Many of our guests enjoy their company. However, if you are uncomfortable around dogs or have <strong className="text-pine-charcoal font-medium">cynophobia</strong> (fear of dogs), please let us know <strong className="text-pine-charcoal font-medium">before your arrival</strong>.</p>

        <div className="bg-pine-accent/10 border-l-4 border-pine-accent p-4 rounded-r-md mt-6">
          <p className="text-pine-charcoal">We will ensure the dogs are kept safely in their enclosures throughout your stay. If you plan to leave or return to Pine Air <strong className="font-medium">after 8:00 PM</strong>, please inform our staff so we can make the necessary arrangements.</p>
        </div>
      </div>
    )
  },
  {
    question: "What is your booking cancellation policy?",
    answer: (
      <div className="space-y-4">
        <h4 className="font-serif text-xl flex items-center gap-2 text-pine-charcoal">Booking Cancellation Policy</h4>
        <p>Our cancellation policy is as follows:</p>

        <div className="overflow-x-auto mt-6 bg-white border border-pine-primary/5 rounded-xl shadow-sm">
          <table className="w-full text-left border-collapse min-w-[300px]">
            <thead>
              <tr className="border-b-2 border-pine-primary/10 bg-pine-mist/20">
                <th className="py-4 px-6 font-serif text-pine-charcoal font-medium">Cancellation Before Check-in</th>
                <th className="py-4 px-6 font-serif text-pine-charcoal font-medium text-center">Refund</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-pine-primary/5 text-pine-gray">
              <tr className="hover:bg-pine-mist/20 transition-colors">
                <td className="py-4 px-6 font-light">30 days or more prior to check-in</td>
                <td className="py-4 px-6 text-center font-medium text-pine-charcoal">100% (Full Refund)</td>
              </tr>
              <tr className="hover:bg-pine-mist/20 transition-colors">
                <td className="py-4 px-6 font-light">7 to 29 days prior to check-in</td>
                <td className="py-4 px-6 text-center font-medium text-pine-charcoal">50% Refund</td>
              </tr>
              <tr className="hover:bg-pine-mist/20 transition-colors">
                <td className="py-4 px-6 font-light">Within 6 days of check-in</td>
                <td className="py-4 px-6 text-center font-medium text-rose-500">No Refund</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
];
