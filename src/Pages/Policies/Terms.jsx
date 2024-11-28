import React from "react";

const Terms = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 lg:text-center lg:mb-8">Terms and Conditions</h1>
      
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p>
          These Terms and Conditions govern your use of NextWave Web Studio’s
          services and website. By engaging with us, you agree to comply with
          these terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Services Offered</h2>
        <p>
          We provide web design, SEO, advertising, Google Analytics, and email
          marketing services. Detailed project scopes will be defined in
          individual agreements.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Payment Terms</h2>
        <p className="font-semibold">Deposit:</p>
        <p className="mb-4">
          A 50% downpayment is required unless explicitly agreed otherwise.
        </p>
        <p className="font-semibold">Final Payment:</p>
        <p className="mb-4">
          The remaining balance is due upon project completion. Failure to pay
          may result in project delays or cancellations.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ownership & Deliverables</h2>
        <p className="font-semibold">Deposit:</p>
        <p className="mb-4">
            Clients own all deliverables after full payment unless otherwise stated. We reserve the right to showcase completed projects as portfolio items.        
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Timely Material Submission</h2>
        <p className="font-semibold">Deposit:</p>
        <p className="mb-4">
            Clients must provide required materials, such as content or images, within agreed timeframes to avoid delays.        
        </p>

        <p className="font-semibold">Review & Submission</p>
        <p className="mb-4">
            Clients are responsible for reviewing and approving work at each milestone.
        </p>
      </section>


      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Refund and Cancellation Policy</h2>
        <p className="font-semibold">Non-Refundable Deposits:</p>
        <p className="mb-4">
          Deposits are non-refundable due to the time and resources allocated to
          your project.
        </p>
        <p className="font-semibold">Milestone Refunds:</p>
        <p className="mb-4">
          Refunds for incomplete projects will be calculated based on
          milestones achieved.
        </p>
        <p className="font-semibold">Cancellation Fees:</p>
        <p>
          If a project is canceled by the client, cancellation fees may apply
          based on work completed.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Liabilies</h2>
        <p className="font-semibold">Liability Limitation</p>
        <p className="mb-4">
            NextWave Web Studio is not liable for damages resulting from website errors, third-party failures, or client-made changes.        
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Governing Law and Dispute Resolution</h2>
        <p className="font-semibold">Disputes</p>
        <p className="mb-4">
            All disputes will be governed by Texas laws. Jurisdiction lies in Midland-Odessa, TX. Parties agree to resolve disputes through negotiation or mediation before pursuing legal action.        
        </p>
      </section>
    </div>
  );
};

export default Terms;
