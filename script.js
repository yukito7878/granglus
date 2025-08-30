
// reveal on scroll
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// mailto submit
function sendMail(ev){
  ev.preventDefault();
  const data = new FormData(ev.target);
  const name = data.get('name')||'';
  const email = data.get('email')||'';
  const tel = data.get('tel')||'';
  const subject = (data.get('subject')||'お問い合わせ') + `（${name}様）`;
  const body = [
    `お名前: ${name}`,
    `メール: ${email}`,
    `電話: ${tel}`,
    '',
    'お問い合わせ内容:',
    (data.get('message')||'').replace(/\n/g, '%0D%0A')
  ].join('%0D%0A');
  const mailto = `mailto:gurangurasu@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
  window.location.href = mailto;
  return false;
}
