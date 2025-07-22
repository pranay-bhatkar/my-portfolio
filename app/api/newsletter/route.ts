
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const email = body.email;

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 });
  }

  // TODO: Save to DB or send to Mailchimp, etc.
  console.log("New subscriber:", email);

  return NextResponse.json({ message: 'Subscribed successfully!' });
}
