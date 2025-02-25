---
title: "The New Rules of Coding: Engineering in the Age of AI"
description: Time to update the algorithm building software products.
date: 2025-02-20
showToc: true
showHeaderNumbers: true
tags:
  - AI
---

Three years ago, we coded like cavemen.

We'd spend hours bouncing between VS Code and Stack Overflow, pecking away line by line, debugging through trial and error. The path from concept to working solution was long and winding. Our ideas stayed trapped in amber while we wrestled with implementation details.

Then everything changed.

![The evolution of coding practices](/images/posts/llm-coding-best-practices/the-new-rules-of-coding-engineering-in-the-age-of-ai-figure-1.png)

## The End of Manual Programming

The emergence of AI coding tools has rewritten the rules of software engineering overnight. Stack Overflow's traffic has plummeted – not because developers suddenly know everything, but because our relationship with code has fundamentally shifted.

Gone are the days of memorizing syntax or fighting with boilerplate. The 10x developer isn't just becoming 20x or 50x more productive. They're entering a new paradigm entirely.

## The Hidden Cost of Infinite Code

Here's what nobody tells you: AI-generated code comes with hidden costs.

Kent Beck once said that a codebase's true value lies in its optionality – the ability to build upon it. When we blindly accept AI's suggestions, we risk creating a house of cards. Each line of code becomes a liability if we don't understand its purpose and implications.

This new era demands a different kind of engineering discipline. The challenge isn't writing code anymore – it's maintaining clarity of thought in a world of infinite possibilities.

## The New Rules of Engineering

1.  **Think in Constraints, Not Implementation**  
    The best engineers now spend more time defining boundaries than writing code. Clear interfaces and type definitions become your north star.
2.  **Treat AI as Your Junior Developer**  
    Don't think of it as a co-pilot – think of it as a skilled but inexperienced junior dev. It can write basic implementations and boilerplate lightning-fast, but it needs careful review and strong guardrails.
3.  **Focus on Architecture Over Implementation**  
    Let AI handle the grunt work: CSS, component construction, test generation. Reserve your mental energy for what matters: system design, data flow, and business logic.
4.  **Build for Understanding**  
    Documentation isn't optional anymore – it's your lifeline. When code can be generated in seconds, the limiting factor becomes comprehension.

Thanks for reading Rob Moore's Letters from a CTO! Subscribe for free to receive new posts and support my work.

## The New Engineering Stack

The tools that excel in this paradigm:

1.  **Cursor Composer**: For rapid prototyping and iteration
2.  **Claude**: For complex problem-solving and architecture discussions
3.  **TypeScript**: Not just for type safety, but as a communication layer between human intent and AI implementation
4.  **GitHub Copilot**: For in-the-moment code completion

## The Practical Reality: Types, Tests, and Architecture

![Types and tests in modern development](/images/posts/llm-coding-best-practices/the-practical-reality-types-tests-and-architecture.png)

### 1. Types Are Your New Interface with AI

TypeScript has become crucial, but not for the reasons we originally adopted it. It's no longer just about catching bugs – it's about controlling AI:

```typescript
// Types are your contract with AI
interface AuthService {
  login(email: string, password: string): Promise<Result<User, AuthError>>;
  validateSession(token: string): Promise<boolean>;
  refreshToken(userId: string): Promise<string>;
}

// AI can implement, but you control the structure
type User = {
  id: string;
  email: string;
  passwordHash: string;
  lastLogin: Date;
  sessionToken?: string;
};
```

When you define clear types:

- AI excels at implementation but stays within your intent
- The type system catches hallucinations instantly
- Your documentation works for both humans and AI
- The codebase becomes self-navigating for AI assistance

### 2. Tests Are Your New Requirements Document

Test-Driven Development is experiencing an unexpected renaissance. Not because we suddenly love writing tests, but because they've become our most effective way to guide AI:

```typescript
describe("AuthService", () => {
  it("should reject invalid credentials", async () => {
    const result = await authService.login("bad@email.com", "wrongpass");
    expect(result.isError()).toBe(true);
    expect(result.error).toBe(AuthError.InvalidCredentials);
  });

  it("should handle expired sessions", async () => {
    // Your test defines the requirement
    // AI implements the validation
  });
});
```

The process becomes:

1.  Write tests that define behavior
2.  Let AI implement to make tests pass
3.  Review and refine the implementation
4.  Repeat with confidence

### 3. Architecture Is Your Real Job Now

This is where human wisdom becomes irreplaceable. Your role is to:

```typescript
// Define clear system boundaries
type Result<T, E> = {
  isError(): boolean;
  value?: T;
  error?: E;
};

// Design data flows that make sense
interface EventBus {
  publish<T extends Event>(event: T): Promise<void>;
  subscribe<T extends Event>(
    eventType: string,
    handler: (event: T) => Promise<void>
  ): Subscription;
}

// Create interfaces that are hard to use incorrectly
interface UserRepository {
  findById(id: string): Promise<Option<User>>;
  save(user: User): Promise<Result<User, DatabaseError>>;
  // AI can implement, but you design the API
}
```

## The Shift in Engineering Culture

The role of the senior engineer is evolving. We're becoming directors more than writers, architects more than builders. Our value isn't in knowing how to implement features – it's in knowing which features to build and how they should fit together.

This changes everything about how we work:

- Code reviews focus more on architecture than implementation
- Documentation becomes a first-class citizen
- System boundaries and interfaces matter more than individual functions
- Testing strategy shifts from implementation details to system behavior

![The evolving role of engineers](/images/posts/llm-coding-best-practices/the-shift-in-engineering-culture.png)

## The Questions That Matter

As we navigate this transformation:

- How do we maintain deep system understanding when implementations can change with a prompt?
- What does software architecture look like when code is essentially free?
- How do we build systems that remain maintainable when different AI tools might generate different implementations?
- What skills define a "senior engineer" in an AI-first world?

## The Path Forward

The future belongs to engineers who can think in systems and constraints, who can harness AI's power while maintaining crystal-clear mental models of their systems.
