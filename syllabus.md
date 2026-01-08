# Tentative Syllabus

The official textbook for the course is RSDP:

- [Introduction to Reliable and Secure Distributed Programming](https://link.springer.com/book/10.1007/978-3-642-15260-3),
Christian Cachin, Rachid Guerraoui, and Luís Rodrigues, 2nd ed. Springer, 2011.

The following chapters are syllabus: 1, 2, 3, 4, 5, 6.

The sections that cover the log-recovery algorithms and Byzantine algorithms in Chapters 3-6 need not be considered for the exam.
All sections in Chapter 1 and 2 should be considered for the exam.

## Optional Textbooks

The following book may be used as a replacement for RSDP for some parts of the course:

- [Think Distributed Systems](https://www.manning.com/books/think-distributed-systems), Dominik Tornow, Manning Publications, 2025.

This book has a more practical approach to distributed systems (less theory and more illustrations), and may be easier to read for some students.

## The lecture presentations are syllabus

- [Course Introduction](slides/0-course-info.pdf ':ignore')
- [Introduction to Distributed Systems](slides/1-introduction.pdf ':ignore')
- [Introduction to Distributed Systems (Chapter 1)](slides/ch1-introduction.pdf ':ignore')
- (link yet not active) [Gorums](slides/2-gorums-intro.pdf ':ignore')
- (link yet not active) [Paxos Explained From Scratch](slides/3-paxos-from-scratch.pdf ':ignore')
- (link yet not active) [Paxos Made Insanely Simple](slides/4-paxos-insanely-simple.pdf ':ignore')
- (link yet not active) [Global Consistent States](slides/5-global-states.pdf ':ignore')
- [Designing for Understandability: The Raft Consensus Algorithm](https://www.youtube.com/watch?v=vYp4LYbnnW8) (video lecture)

The slides from **the guest lectures are also syllabus**.

## The lab assignments available on GitHub are syllabus

This includes supplementary material linked from the lab assignments, such as protobuf and gRPC.
This means you should know the basics, but we won't ask about deep knowledge about the details.
For example, you may be asked to explain different portions of a proto file, or to write a proto file from scratch according to a specification.

## Paper Reading List

The following papers are required reading:

- [Paxos Explained from Scratch](reading/paxos-scratch-paper.pdf ':ignore'), Hein Meling and Leander Jehl
- [Paxos Made Simple](reading/paxos-simple.pdf ':ignore'), Leslie Lamport
- [In Search of an Understandable Consensus Algorithm](reading/raft.pdf ':ignore'), Diego Ongaro and John Ousterhout
- [Consistent Global States](reading/consistent-global-states.pdf ':ignore'), Keith Marzullo and Ozalp Babaoglu
- [Keeping CALM When Distributed Consistency Is Easy](reading/keeping-calm.pdf ':ignore'), Joseph M. Hellerstein, Peter Alvaro
- [The Tail at Scale](reading/tail-at-scale.pdf ':ignore'), Jeff Dean and Luiz André Barroso

The following wikipedia articles are syllabus:

- [The CAP Theorem](https://en.wikipedia.org/wiki/CAP_theorem)
- [The PACELC Theorem](https://en.wikipedia.org/wiki/PACELC_theorem)
- [The FLP Impossibility Result](https://en.wikipedia.org/wiki/Consensus_%28computer_science%29#The_FLP_impossibility_result_for_asynchronous_deterministic_consensus)
- [The Two Generals Problem](https://en.wikipedia.org/wiki/Two_Generals%27_Problem)
- [Fallacies of Distributed Computing](https://en.wikipedia.org/wiki/Fallacies_of_distributed_computing)
- [Byzantine Generals Problem](https://en.wikipedia.org/wiki/Byzantine_fault)

## Optional Reading and Viewing Material

### Reading Material

Additional Paxos-related reading material (not required reading) can be found in lab4's [resources](../lab4/resources) folder.
Robbert van Renesse's [Paxos Made Moderately Complex](https://www.cs.cornell.edu/courses/cs7412/2011sp/paxos.pdf ':ignore') is also a good resource for understanding the Paxos algorithm in more detail.

The original Gorums paper is optional reading:

- [Towards New Abstractions for Implementing Quorum-Based Systems](reading/gorums.pdf ':ignore'), Tormod Erevik Lea, Leander Jehl and Hein Meling

### Optional Video Lectures

Optional video lectures related to the Raft paper:

- [Raft Lecture (Raft user study)](https://www.youtube.com/watch?v=YbZ3zDzDnrw)
- [Paxos Lecture (Paxos user study)](https://www.youtube.com/watch?v=JEpsBg0AO6o)

## Some Useful Resources on System Models, the CAP Theorem, and Raft

### System Models

- <https://decentralizedthoughts.github.io/2019-06-01-2019-5-31-models/>
- <https://decentralizedthoughts.github.io/2019-09-13-flavours-of-partial-synchrony/>
- <https://decentralizedthoughts.github.io/2019-06-27-defining-consensus/>

## CAP Theorem

Here are some resources to help you understand the CAP theorem:

- <https://mwhittaker.github.io/blog/an_illustrated_proof_of_the_cap_theorem/>
- <https://news.ycombinator.com/item?id=41772624>
- <https://brooker.co.za/blog/2024/07/25/cap-again.html>

## Raft

- <https://thesecretlivesofdata.com/raft/>

## Learning about Distributed Systems

- <http://muratbuffalo.blogspot.com/2020/06/learning-about-distributed-systems.html>
