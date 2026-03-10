import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FileText, Calendar, IndianRupee, HelpCircle, CheckCircle, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Inquiry Submission',
    description:
      'Submit the online inquiry form (or contact admissions) to express interest and request application materials.',
  },
  {
    number: '02',
    title: 'Document Review',
    description:
      'Provide required documents (previous school records, recommendations); our team reviews your application for completeness.',
  },
  {
    number: '03',
    title: 'Campus Visit & Interview',
    description:
      'Schedule a campus visit and meet with admissions for a student and family interview and a school tour.',
  },
  {
    number: '04',
    title: 'Admission Decision',
    description:
      'Admissions committee evaluates all materials and interviews, then issues an acceptance, waitlist, or decline decision.',
  },
  {
    number: '05',
    title: 'Enrollment & Orientation',
    description:
      'Accepted families complete enrollment forms, pay fees, and attend orientation to prepare for the school year.',
  },
];

const requirements = [
  'Completed application form (online or written)',
  'Birth certificate / Age proof (Aadhaar / Pan card copy)',
  'Previous school report card (if applicable)',
  'Transfer certificate from previous school',
  'Character certificate from previous school',
  'Medical fitness certificate',
  'Passport-size photographs (4 copies)',
  'Application fee (₹2,000 - non-refundable)',
];

const tuitionInfo = [
  { level: 'LKG-I', tuition: '₹60,000 / year' },
  { level: 'Class 2', tuition: '₹75,000 / year' },
  { level: 'Class 3-5', tuition: '₹90,000 / year' },
  { level: 'Class 6-8', tuition: '₹1,10,000 / year' },
];

const faqs = [
  {
    question: 'What is the application deadline?',
    answer: 'Our priority deadline is January 15th. Applications are accepted on a rolling basis after this date, space permitting.',
  },
  {
    question: 'Do you offer financial aid?',
    answer: 'Yes! Over 30% of our students receive some form of financial assistance. Aid is need-based and awarded annually.',
  },
  {
    question: 'What is the average class size?',
    answer: 'Our average class size is 15 students with a 15:1 student-to-teacher ratio.',
  },
  {
    question: 'Is transportation available?',
    answer: 'We offer bus service to several surrounding communities. Routes and fees vary by location.',
  },
];

function FormArea() {
  const [applicantName, setApplicantName] = useState('');
  const [parentName, setParentName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [level, setLevel] = useState('');
  const [notes, setNotes] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const buildMessage = () => {
    return `Admission Inquiry:\nApplicant: ${applicantName || '-'}\nParent/Guardian: ${parentName || '-'}\nPhone: ${phone || '-'}\nEmail: ${email || '-'}\nApplying For: ${level || '-'}\nNotes: ${notes || '-'}\n\nSent from Vithya Admissions Page`;
  };

  const handleWhatsApp = () => {
    if (!applicantName || !phone) {
      alert('Please provide at least applicant name and phone number.');
      return;
    }

    const text = buildMessage();
    const encoded = encodeURIComponent(text);
    // Send WhatsApp message directly to school's number (India +91)
    const schoolNumber = '916900601989'; // +91 6900601989
    const url = `https://wa.me/${schoolNumber}?text=${encoded}`;
    window.open(url, '_blank');
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(buildMessage());
      alert('Message copied to clipboard');
    } catch (e) {
      alert('Unable to copy. Please select and copy manually.');
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          value={applicantName}
          onChange={(e) => setApplicantName(e.target.value)}
          placeholder="Applicant Name"
          className="input w-full"
        />
        <input
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
          placeholder="Parent / Guardian Name"
          className="input w-full"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone (required)"
          className="input w-full"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="input w-full"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <select value={level} onChange={(e) => setLevel(e.target.value)} className="input w-full">
          <option value="">Applying For (select)</option>
          <option>LKG</option>
          <option>I</option>
          <option>II</option>
          <option>III</option>
          <option>IV</option>
          <option>V</option>
          <option>VI</option>
          <option>VII</option>
          <option>VIII</option>
        </select>
        <input
          value={''}
          readOnly
          placeholder="Location: Barjatrapur, Cachar, Assam"
          className="input w-full bg-muted"
        />
      </div>

      <textarea
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Additional notes / message"
        className="input h-28 w-full"
      />

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* Left column: persistent WhatsApp button and actions */}
          <div className="sm:col-span-1 flex flex-col items-start gap-3">
            <div className="text-sm font-medium mb-1">Send with WhatsApp</div>
            <Button size="lg" onClick={handleWhatsApp} className="w-full bg-[#25D366] hover:bg-[#1FAE56] text-white font-semibold">
              Send with WhatsApp
            </Button>

            <Button variant="gold" size="lg" onClick={handleCopy} className="w-full">
              Copy Message
            </Button>

            <Button variant="gold" size="sm" onClick={() => setShowPreview((s) => !s)} className="mt-2">
              {showPreview ? 'Hide Preview' : 'Preview Message'}
            </Button>

            <div className="text-xs text-muted-foreground mt-2">This will open WhatsApp to send the form content to the school.</div>
          </div>

          {/* Right column: preview area (spans 2 cols on small+) */}
          <div className="sm:col-span-2">
            {showPreview ? (
              <div>
                <div className="mb-2 text-sm font-medium">Preview Message</div>
                <div className="bg-muted rounded-md p-4">
                  <pre className="whitespace-pre-wrap text-sm m-0">{buildMessage()}</pre>
                </div>
              </div>
            ) : (
              <div className="text-sm text-muted-foreground">Preview will appear here when you click "Preview Message".</div>
            )}
          </div>
        </div>
    </div>
  );
}

export default function Admissions() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container-school">
          <div className="max-w-3xl">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-4">
              Admissions
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Your Journey<br />
              <span className="text-gold">Starts Here</span>
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8">
              We welcome students who are eager to learn, grow, and contribute to our
              vibrant community. Begin your application today.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="#apply" className="flex items-center gap-2">
                Start Application
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="section-padding bg-background">
        <div className="container-school">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-gold font-semibold text-sm tracking-wider uppercase mb-3">
              How to Apply
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Admission Process
            </h2>
            <p className="text-muted-foreground text-lg">
              Our straightforward process guides you from inquiry to enrollment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative bg-card rounded-2xl p-6 shadow-school-sm border border-border/50"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-6 h-0.5 bg-gold" />
                )}
                <div className="font-display text-4xl font-bold text-gold/30 mb-4">
                  {step.number}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Tuition */}
      <section className="section-padding bg-cream-dark">
        <div className="container-school">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Requirements */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-school-md">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center">
                  <FileText className="w-7 h-7 text-primary-foreground" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Application Requirements
                </h2>
              </div>
              <ul className="space-y-4">
                {requirements.map((req) => (
                  <li key={req} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-muted-foreground">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tuition */}
            <div className="bg-card rounded-2xl p-8 md:p-10 shadow-school-md">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-gold flex items-center justify-center">
                  <IndianRupee className="w-7 h-7 text-navy-dark" />
                </div>
                <h2 className="font-display text-2xl font-bold text-foreground">
                  Tuition & Fees
                </h2>
              </div>
              <div className="space-y-4">
                {tuitionInfo.map((item) => (
                  <div
                    key={item.level}
                    className="flex justify-between items-center py-4 border-b border-border last:border-0"
                  >
                    <span className="text-foreground font-medium">{item.level}</span>
                    <span className="text-navy font-display font-bold text-xl">{item.tuition}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-6">
                * Tuition includes books, technology, and most activities. Financial aid available.
              </p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Application Form */}
      <section id="apply" className="py-20 bg-gradient-hero scroll-mt-32">
        <div className="container-school">
          <div className="max-w-3xl mx-auto bg-card rounded-2xl p-8 md:p-12 shadow-school-md">
            <div className="text-center mb-8">
              <div className="w-16 h-16 rounded-xl bg-gold flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-navy-dark" />
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                Application Form
              </h2>
              <p className="text-primary-foreground/80">
                Fill the form below and send the same message through WhatsApp.
              </p>
            </div>

            <FormArea />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-school">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="w-14 h-14 rounded-xl bg-navy flex items-center justify-center mx-auto mb-6">
              <HelpCircle className="w-7 h-7 text-primary-foreground" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-card rounded-xl p-6 shadow-school-sm border border-border/50"
              >
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">
                  {faq.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
