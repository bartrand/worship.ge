export async function GET() {
  const ICAL_URL =
    'https://calendar.google.com/calendar/ical/19148e6f30ba4f414dffd0aadb68ee2ffa6b37dfdf35dc0ed3fc2d1e0e301f34%40group.calendar.google.com/public/basic.ics';

  const text = await fetch(ICAL_URL).then(r => r.text());

  return new Response(text, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': 'attachment; filename="lent2026.ics"',
    },
  });
}
