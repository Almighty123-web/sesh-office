import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { prisma } from '@/lib/prisma';
import { registerSchema } from '@/lib/validation';
export async function POST(request: Request) {
  try {
    const parsed = registerSchema.safeParse(await request.json());
    if (!parsed.success) return NextResponse.json({ message: parsed.error.flatten().fieldErrors }, { status: 400 });
    const { name, email, password } = parsed.data; const normalizedEmail = email.toLowerCase();
    if (await prisma.user.findUnique({ where: { email: normalizedEmail } })) return NextResponse.json({ message: 'An account with this email already exists.' }, { status: 409 });
    const user = await prisma.user.create({ data: { name, email: normalizedEmail, passwordHash: await bcrypt.hash(password, 12), workspaces: { create: { name: `${name}'s Workspace`, slug: `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`, description: 'Your primary SESH Office workspace' } } } });
    return NextResponse.json({ message: 'Account created successfully.', user: { id: user.id, name: user.name, email: user.email } }, { status: 201 });
  } catch (error) { console.error(error); return NextResponse.json({ message: 'Failed to create account.' }, { status: 500 }); }
}
