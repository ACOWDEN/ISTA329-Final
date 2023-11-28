function openPowerPoint(presentationName) {
    var google_slides = '';

    if (presentationName === 'Trust and Transparency') {
        google_slides = 'https://docs.google.com/presentation/d/e/2PACX-1vQoTGj3SL23aOQ0rga5bcSuCvwpcwdJSwTd3hTsfYAhYxSz-r1JO5Yd5Hittrv3euCEf_cjHRtodHns/embed?start=true&loop=true&delayms=3000';
    } else if (presentationName === 'Permission') {
        google_slides = 'https://docs.google.com/presentation/d/e/2PACX-1vRZisbVXUx-6VYGqauN19GKTZ0CPJzMYLUwYSPza3boA1PzDEnkXCN4EHzOy-K7kP5iLwCYEelRNzKj/embed?start=true&loop=true&delayms=3000';
    } else if (presentationName === 'Middlemen') {
        google_slides = 'https://docs.google.com/presentation/d/e/2PACX-1vTOYYb47sdwYukBffhkfEamnLjejmMZZOGsU-13mihbMCRC0u-PZ23DtmDPD8C-mAaEp-80NTozTlOy/embed?start=true&loop=true&delayms=3000';
    } else if (presentationName === 'Centralization') {
        google_slides = 'https://docs.google.com/presentation/d/e/2PACX-1vT63Ma9NNMd5XXaVaw9xPp8oPpFPRnmE-aCgTeVRcWVeh3wmSToY-M98xnZd4htnHFA1RoMywN0MzSl/embed?start=true&loop=true&delayms=3000';
    } else if (presentationName === 'Incentives') {
        google_slides = 'https://docs.google.com/presentation/d/e/2PACX-1vRZ3eD38t8NXQhSs2fg8hf00cW4-_sUEn8a_xsLJekXJlfaDcOt5V6QNnUKTNRj3uQdgIL9c0X3dNnW/embed?start=false&loop=false&delayms=3000';
    } else if (presentationName === 'Ownership') {
        google_slides = 'https://your-embedded-code-url-for-Ownership';
    }

    var iframe = parent.document.getElementById('powerpointIframe');
    iframe.src = google_slides;
}