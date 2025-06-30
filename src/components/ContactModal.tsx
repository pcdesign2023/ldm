import React from 'react';

export default function ContactModal({ open, onClose }: { open: boolean, onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl mx-2 p-6 relative">
        {/* Header */}
        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-3xl" onClick={onClose}>&times;</button>
        <div className="mb-6 text-center">
          <div className="font-bold text-lg text-gray-800 mb-1">Contact Us</div>
          <div className="text-sm text-gray-600">Phone: <a href="tel:+17818050003" className="underline">+1 (781) 805-0003</a></div>
        </div>
        {/* Mailchimp Embedded Form */}
        <div id="mc_embed_shell">
          <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
          <style>{`
            #mc_embed_signup{background:#fff; false;clear:left; font:14px Helvetica,Arial,sans-serif; width: 100%; max-width: 600px;}
          `}</style>
          <div id="mc_embed_signup">
            <form action="https://localdigitalmarketing.us13.list-manage.com/subscribe/post?u=affaa8c96ed418033009ba77a&amp;id=3951f75559&amp;f_id=00ccbfe5f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
              <div id="mc_embed_signup_scroll">
                <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                <div className="mc-field-group"><label htmlFor="mce-EMAIL">Email Address <span className="asterisk">*</span></label><input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required /></div>
                <div className="mc-field-group"><label htmlFor="mce-FNAME">First Name </label><input type="text" name="FNAME" className="text" id="mce-FNAME" /></div>
                <div className="mc-field-group"><label htmlFor="mce-LNAME">Last Name </label><input type="text" name="LNAME" className="text" id="mce-LNAME" /></div>
                <div className="mc-field-group"><label htmlFor="mce-PHONE">Phone Number </label><input type="text" name="PHONE" className="REQ_CSS" id="mce-PHONE" /></div>
                <div className="mc-field-group"><label htmlFor="mce-COMPANY">Business Activity </label><input type="text" name="COMPANY" className="text" id="mce-COMPANY" /></div>
                <div id="mce-responses" className="clear foot">
                  <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                  <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                </div>
                <div aria-hidden="true" style={{position: 'absolute', left: '-5000px'}}>
                  <input type="text" name="b_affaa8c96ed418033009ba77a_3951f75559" tabIndex={-1} />
                </div>
                <div className="optionalParent">
                  <div className="clear foot">
                    <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                    <p style={{margin: '0px auto'}}>
                      <a href="http://eepurl.com/jh_Jtw" title="Mailchimp - email marketing made easy and fun">
                        <span style={{display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px'}}>
                          <img className="refferal_badge" src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg" alt="Intuit Mailchimp" style={{width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center'}} />
                        </span>
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <script type="text/javascript" src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"></script>
          <script type="text/javascript" dangerouslySetInnerHTML={{__html: `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[4]='PHONE';ftypes[4]='phone';fnames[6]='COMPANY';ftypes[6]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);`}} />
        </div>
      </div>
    </div>
  );
} 