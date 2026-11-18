# Illumina Stranded mRNA Prep, Ligation Reference Guide (1000000124518)
URL: https://support.illumina.com/content/dam/illumina-support/documents/documentation/chemistry_documentation/illumina_prep/RNA/illumina-stranded-mrna-reference-guide-1000000124518-02.pdf
# Illumina Stranded mRNA Prep 
## Reference Guide 
ILLUMINA PROPRIETARY Document # 1000000124518 v02 April 2021 
For Research Use Only. Not for use in diagnostic procedures. This document and its contents are proprietary to Illumina, Inc. and its affiliates ("Illumina"), and are intended solely for the contractual use of its customer in connection with the use of the product(s) described herein and for no other purpose. This document and its contents shall not be used or distributed for any other purpose and/or otherwise communicated, disclosed, or reproduced in any way whatsoever without the prior written consent of Illumina. Illumina does not convey any license under its patent, trademark, copyright, or common-law rights nor similar rights of any third parties by this document. The instructions in this document must be strictly and explicitly followed by qualified and properly trained personnel in order to ensure the proper and safe use of the product(s) described herein. All of the contents of this document must be fully read and understood prior to using such product(s). FAILURE TO COMPLETELY READ AND EXPLICITLY FOLLOW ALL OF THE INSTRUCTIONS CONTAINED HEREIN MAY RESULT IN DAMAGE TO THE PRODUCT(S), INJURY TO PERSONS, INCLUDING TO USERS OR OTHERS, AND DAMAGE TO OTHER PROPERTY, AND WILL VOID ANY WARRANTY APPLICABLE TO THE PRODUCT(S). ILLUMINA DOES NOT ASSUME ANY LIABILITY ARISING OUT OF THE IMPROPER USE OF THE PRODUCT(S) DESCRIBED HEREIN (INCLUDING PARTS THEREOF OR SOFTWARE). © 2021 Illumina, Inc. All rights reserved. All trademarks are the property of Illumina, Inc. or their respective owners. For specific trademark information, see www.illumina.com/company/legal.html. 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
ii 
Illumina Stranded mRNA Prep, Ligation Reference Guide Revision History 
Document Date Description of Change 
Document # 1000000124518 v02 April 2021 Added dilution and quantitation information for the NextSeq 1000/2000 Sequencing System. Removed Agencourt RNAClean XP Beads. Corrected EPH3 and FSA definitions. Document # 1000000124518 v01 August 2020 Updated workflow diagram description to include the number of samples used to calculate processing times. Corrected formatting of index kit names. Document # 1000000124518 v00 June 2020 Initial release. 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
iii 
Illumina Stranded mRNA Prep, Ligation Reference Guide Table of Contents 
Revision History iii 
Overview 1
Introduction 1RNA Input Recommendations 1Additional Resources 2
Protocol 3
Introduction 3Pooling Preparation 3Handling Beads 3Tips and Techniques 4Library Prep Diagram 5Purify and Fragment mRNA 7Preparation 7Procedure 8Synthesize First Strand cDNA 10 Preparation 11 Procedure 11 Synthesize Second Strand cDNA 12 Preparation 12 Procedure 13 Adenylate 3ʹ Ends 14 Preparation 14 Procedure 15 Ligate Anchors 15 Preparation 16 Procedure 16 Clean Up Fragments 17 Procedure 17 Amplify Library 18 Preparation 19 Procedure 19 Clean Up Library 20 Preparation 20 Procedure 20 Check Library 21 Dilute Library to the Starting Concentration 23 Trim T-Overhang (Optional) 24 
Appendix A Supporting Information 25 
Introduction 25 Acronyms 25 Kit Contents and Storage 26 Illumina Stranded mRNA Prep, Ligation(16 Samples) (20040532) 27 Illumina Stranded mRNA Prep, Ligation(96 Samples) (20040534) 28 IDT for Illumina RNA UD Indexes Set A, Ligation(96 Indexes, 96 Samples) (20040553) 29 IDT for Illumina RNA UD Indexes Set B, Ligation(96 Indexes, 96 Samples) (20040554) 29 IDT for Illumina RNA UD Indexes Set C, Ligation(96 Indexes, 96 Samples) (2004555) 29 IDT for Illumina RNA UD Indexes Set D, Ligation(96 Indexes, 96 Samples) (20040556) 29 Consumables and Equipment 30 Ancillary Consumables 30 Ancillary Equipment 31 
Technical Assistance 32 
> Document # 1000000124518 v02
> For Research Use Only. Not for use in diagnostic procedures.
v
> Illumina Stranded mRNA Prep, Ligation Reference Guide
# Overview Introduction 
The Illumina ® Stranded mRNA Prep, Ligation kit converts the messenger (mRNA) in total RNA into up to 384 dual-indexed libraries. Oligo(dT) magnetic beads purify and capture the mRNA molecules containing polyA tails. The purified mRNA is fragmented and copied into first strand complimentary DNA (cDNA) using reverse transcriptase and random primers. In a second strand cDNA synthesis step, dUTP replaces dTTP to achieve strand specificity. The final steps add adenine (A) and thymine (T) bases to fragment ends and ligate adapters. The resulting products are purified and selectively amplified for sequencing on an Illumina system. The kit offers the following features: 
• Capture of both coding RNA and multiple forms of noncoding RNA that are polyadenlyated 
• A polyA capture to selectively sequence mRNA 
• Unique dual (UD) indexing with the IDT for Illumina RNA UD Indexes 
# RNA Input Recommendations 
The protocol is optimized for 25–1000 ng of high-quality total human RNA. Lower amounts can compromise ligation and lower yield. Determining the input amount for other species and quality levels requires further optimization. Include a DNase treatment with the RNA isolation method. The DNase treatment ensures sample purity and accurate quantification. Before starting the protocol, quantify the total RNA using standard methods and assess quality using a fragment analysis method. The following figure provides an example trace for Universal Human Reference (UHR) total RNA input. The trace is from a 2100 Bioanalyzer System using an RNA 6000 Pico Kit. 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
1
Illumina Stranded mRNA Prep, Ligation Reference Guide Figure 1 Example Trace of UHR Input 
# Additional Resources 
The following resources provide instructions and guidelines for using the Illumina Stranded mRNA kit to prepare libraries. Visit the Illumina Stranded mRNA support pages for additional information: 
• Compatible products and requirements for recording sample information, sequencing libraries, and analyzing data 
• Questions and answers about using the kit 
• Courses for related products and subjects 
• The latest versions of the kit documentation 
Resource Description 
Custom Protocol Selector A tool for generating end-to-end instructions tailored to your library prep method, run parameters, and analysis method, with options to refine the level of detail. 
Illumina Stranded mRNA Prep, Ligation Checklist (document # 1000000124519) 
Provides a checklist of steps for the experienced user. 
Illumina Stranded mRNA Prep, Ligation Consumables & Equipment (document # 1000000124520) 
Provides an interactive checklist of user-provided consumables and equipment. 
Index Adapters Pooling Guide (document # 1000000041074) 
Provides guidelines for preparing dual-indexed libraries with balanced index combinations for sequencing on Illumina systems. 
Illumina Adapter Sequences (document # 1000000002694) 
Provides the nucleotide sequences that comprise Illumina oligonucleotides used in Illumina sequencing technologies. 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
2
Illumina Stranded mRNA Prep, Ligation Reference Guide Protocol Introduction 
This section describes the Illumina Stranded mRNA Prep, Ligation protocol with step-by-step instructions. 
• Review the complete sequencing workflow, from sample through analysis, to ensure compatibility of products and experiment parameters. 
• Confirm kit contents and make sure that you have the required consumables and equipment, including library prep reagents and index anchors and adapters. For a complete list, see Supporting Information on page 25. 
# Pooling Preparation 
When pooling libraries, record information about your samples before starting library prep. Use a recording tool compatible with your sequencing system and libraries. For compatibility information, see the Illumina Stranded mRNA support pages or the support pages for your system. The protocol uses IDT for Illumina RNA UD Indexes to index libraries in two separate steps, first adding anchors and then the UD indexes. The UD index primers add distinct Index 1 (i7) and Index 2 (i5) sequences to each end of a fragment. Each index sequence is 10 bp long. 
• For strategies on forming low-plex, color-balanced pools, see the Index Adapters Pooling Guide (document # 1000000041074) .
• For index adapter sequences and how to record them, see Illumina Adapter Sequences (document # 11000000002694) .
# Handling Beads 
The protocol uses two types of beads: RNA Purification Beads and Agencourt AMPure XP. Each bead type has a specific technical application and cannot be substituted. Apply the following techniques when handling beads: 
• Use beads at room temperature. 
• Do not use beads that have been stored < 2°C. 
• Vortex beads before each use and frequently throughout the protocol to resuspend. Resuspended beads are evenly distributed and homogenous in color. 
• Dispense liquid directly onto bead pellets so that beads on the side of the wells are wetted. 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
3
Illumina Stranded mRNA Prep, Ligation Reference Guide • When the plate is on the magnetic stand, do not agitate the plate or disturb the bead pellet. 
• If beads are aspirated into pipette tips, dispense back to the plate on the magnetic stand, and wait until the liquid is clear (~2 minutes). 
• If beads adhere to well walls, centrifuge at 280 × g for 3 seconds, and then pipette to resuspend. 
# Tips and Techniques 
Protocol Continuity 
• Follow the protocol in the order described using the specified parameters. 
• Avoid extended pauses until RNA is converted into double-stranded cDNA. 
• Unless a safe stopping point is specified in the protocol, proceed immediately to the next step. 
Avoiding Cross-Contamination 
• When adding or transferring samples, change tips between each sample .
• When adding adapters or primers, change tips between each well .
• Remove unused index adapter plates from the working area. 
Handling Reagents and RNA 
• Avoid multiple freeze-thaw cycles of input RNA. 
– You can store RNA in RNase-free water or TE buffer at -85°C to -65°C for up to 1 year. 
– If you must reuse the sample, aliquot into separate tubes for single-use. 
• Keep thawed reagents on ice until needed. Promptly return all reagents to storage after use. 
• When not in use, seal plates and close lids to limit contamination. 
Sealing the Plate 
• Use Microseal 'B' adhesive seals throughout the protocol. The seals are effective at -40°C to 110°C. 
• Cover the plate with the seal, and seal with a rubber roller or wedge. 
• After each use, discard seals from plates. 
Plate Transfers 
• When transferring volumes between plates, transfer the specified volume from each well of the first plate to the corresponding well of the second plate. 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
4
Illumina Stranded mRNA Prep, Ligation Reference Guide Mixing and Centrifugation 
• The protocol includes the choice to mix by shaking or pipetting. Use the applicable magnetic stand: 
– If you choose to mix by pipette, use a Magnetic Stand-96. 
– If you choose to mix by shaking, use a DynaMag-96 Side Magnet. 
• At any step, centrifuge at 280 × g for 10 seconds to consolidate liquid or beads in the bottom of the well and prevent sample loss. 
# Library Prep Diagram 
The following diagram provides an overview of the Illumina Stranded mRNA protocol when using 24 samples. Safe stopping points are marked between steps. 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
5
Illumina Stranded mRNA Prep, Ligation Reference Guide Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
6
Illumina Stranded mRNA Prep, Ligation Reference Guide Purify and Fragment mRNA 
This step uses oligo(dT) magnetic beads to capture messenger RNAs (mRNAs) with polyA tails. The RNA is then fragmented and primed for cDNA synthesis. 
Consumables 
• BBB (Bead Binding Buffer) 
• BWB (Bead Washing Buffer) 
• ELB (Elution Buffer) 
• EPH3 (Elute, Prime, Fragment 3HC Mix) 
• RPBX (RNA Purification Beads) 
• Nuclease-free ultrapure water 
• 1.7 ml microcentrifuge tube, RNase-free 
• 96-well PCR plates, semiskirted (2) 
• Microseal 'B' adhesive film 
• Prepare for a later procedure: 
– FSA (First Strand Synthesis Mix) 
# Preparation 
1. Prepare the following consumables: 
Reagent Storage Instructions 
BBB 2°C to 8°C Vortex and invert to mix. BWB 2°C to 8°C Vortex and invert to mix. ELB 2°C to 8°C Vortex and invert to mix. EPH3 -25°C to -15°C Thaw at room temperature. Vortex to mix, and then centrifuge briefly. FSA -25°C to -15°C Thaw on ice. Vortex to mix, and then centrifuge briefly. RPBX 2°C to 8°C Let stand for 10 minutes to bring to room temperature. Vortex and invert to mix. 2. Save the following mRNA_CAP program on the thermal cycler: 
• Choose the preheat lid option and set to 100°C 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
7
Illumina Stranded mRNA Prep, Ligation Reference Guide • Reaction volume is 50 μl 
• 65°C for 5 minutes 
• 4°C for 30 seconds 
• 23° for 5 minutes 
• Hold at 23°C 3. Save the following mRNA_ELT program on the thermal cycler: 
• Choose the preheat lid option and set to 100°C 
• Reaction volume is 25 μl 
• 80°C for 2 minutes 
• Hold at 25°C 4. Save the following DEN94_8 program on the thermal cycler: 
• Choose the preheat lid option and set to 100°C 
• Reaction volume is 19 μl 
• 94°C for 8 minutes 
• Hold at 4°C 
# Procedure 
Capture mRNA 
1. In each well of a new PCR plate, dilute 25–1000 ng total RNA in nuclease-free ultrapure water to a volume of 25 μl. 2. Vortex RPBX to resuspend. 3. Add 25 μl RPBX to each well. 4. Mix using either method: 
• Seal and shake at 2000 rpm for 1 minute, and then centrifuge at 280 × g for 10 seconds. 
• Pipette 10 times, and then seal. 5. Place on the preprogrammed thermal cycler and run the mRNA_CAP program. Total program time is ~15 minutes and each well contains a volume of 50 μl. 
Elute mRNA 
1. Centrifuge the sealed PCR plate at 280 × g for 10 seconds. 2. Place on the magnetic stand and wait 2 minutes. 3. Remove and discard all supernatant. 4. Remove from the magnetic stand. 
> Document # 1000000124518 v02
> For Research Use Only. Not for use in diagnostic procedures.
8
> Illumina Stranded mRNA Prep, Ligation Reference Guide
5. Add 100 μl BWB to each well. 6. Mix using either method: 
• Seal and shake at 2000 rpm for 1 minute, and then centrifuge at 280 × g for 10 seconds. 
• Pipette 10 times. 7. Place on the magnetic stand and wait 2 minutes. 8. Remove and discard all supernatant. 9. With a 20 μl pipette, remove all residual BWB. 10. Remove from the magnetic stand. 11. Add 25 μl ELB to each well. 12. Mix using either method: 
• Seal and shake at 2200 rpm for 1 minute. 
• Slowly pipette until the beads are resuspended, and then seal. 13. If shaking did not fully resuspend the beads, slowly pipette until the beads are resuspended, and then seal. 14. Centrifuge at 280 × g for 10 seconds. 15. Place on the preprogrammed thermal cycler and run the mRNA_ELT program. Total program time is ~6 minutes and each well contains a volume of 25 μl. 
Clean Up mRNA 
1. In a 1.7 ml tube on ice, combine exactly the following volumes to prepare Fragmentation Master Mix. Multiply each volume by the number of samples. 
• Nuclease-free ultrapure water (10.5 μl) 
• EPH3 (10.5 μl) Volumes include reagent overage for accurate pipetting. 2. Centrifuge the sealed PCR plate at 280 × g for 10 seconds. 3. Add 25 μl BBB to each well. 4. Mix using either method: 
• Seal and shake at 2000 rpm for 1 minute, and then centrifuge at 280 × g for 10 seconds. 
• Pipette 10 times. 5. Incubate at room temperature for 5 minutes. 6. Place on the magnetic stand and wait 2 minutes. 7. Remove and discard 50 μl supernatant. 8. Remove from the magnetic stand. 9. Add 100 μl BWB to each well. 10. Mix using either method: 
> Document # 1000000124518 v02
> For Research Use Only. Not for use in diagnostic procedures.
9
> Illumina Stranded mRNA Prep, Ligation Reference Guide
• Seal and shake at 2000 rpm for 1 minute, and then centrifuge at 280 × g for 10 seconds. 
• Pipette 10 times. 11. Place on the magnetic stand and wait 2 minutes. 12. Remove and discard all supernatant. 13. With a 20 μl pipette, remove all residual BWB. 14. Remove from the magnetic stand. 15. Thoroughly pipette Fragmentation Master Mix to mix. 16. Add 19 μl Fragmentation Master Mix to each well. 17. Mix using either method: 
• Seal and shake at 2200 rpm for 1 minute. 
• Slowly pipette until the beads are resuspended, and then seal. 18. If shaking did not fully resuspend the beads, slowly pipette until the beads are resuspended, and then seal. 19. Incubate at room temperature for 2 minutes. 20. Centrifuge at 280 × g for 10 seconds. 
Fragment and Denature mRNA 
1. Place on the preprogrammed thermal cycler and run the DEN94_8 program. Total program time is ~10 minutes and each well contains a volume of 19 μl. 2. Centrifuge the sealed PCR plate at 280 × g for 10 seconds. 3. Place on the magnetic stand and wait 2 minutes. 4. Transfer 17 μl supernatant from each well to a new PCR plate. 5. Set aside the new PCR plate on ice. 
# Synthesize First Strand cDNA 
This step reverse transcribes the hexamer-primed RNA fragments to produce first strand complementary DNA (cDNA). The First Strand Synthesis Mix includes Actinomycin D, which allows RNA-dependent synthesis and improves strand specificity while preventing spurious DNA-dependent synthesis. 
Consumables 
• FSA (First Strand Synthesis Mix) 
• RVT (Reverse Transcriptase) 
• 1.7 ml microcentrifuge tube, RNase-free 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
10 
Illumina Stranded mRNA Prep, Ligation Reference Guide • Microseal 'B' adhesive film 
• Prepare for a later procedure: 
– Agencourt AMPure XP 
– RSB (Resuspension Buffer) 
– SMM (Second Strand Marking Master Mix) 
Warning 
This set of reagents contains potentially hazardous chemicals. Personal injury can occur through inhalation, ingestion, skin contact, and eye contact. Wear protective equipment, including eye protection, gloves, and laboratory coat appropriate for risk of exposure. Handle used reagents as chemical waste and discard in accordance with applicable regional, national, and local laws and regulations. For additional environmental, health, and safety information, see the SDS at support.illumina.com/sds.html. 
# Preparation 
1. Prepare the following consumables: 
Reagent Storage Instructions 
AMPure XP 2°C to 8°C Let stand for 30 minutes to bring to room temperature. Vortex and invert to mix. RSB -25°C to -15°C Thaw at room temperature. Vortex and invert to mix. RVT -25°C to -15°C Store until needed. Flick to mix, and then centrifuge briefly. SMM -25°C to -15°C Thaw on ice. Invert to mix, and then centrifuge briefly. 2. Save the following FSS program on the thermal cycler: 
• Choose the preheat lid option and set to 100°C 
• Reaction volume is 25 μl 
• 25°C for 10 minutes 
• 42°C for 15 minutes 
• 70°C for 15 minutes 
• Hold at 4°C 
# Procedure 
1. In a 1.7 ml tube on ice, combine exactly the following volumes to prepare First Strand Synthesis Master Mix. Multiply each volume by the number of samples. 
> Document # 1000000124518 v02
> For Research Use Only. Not for use in diagnostic procedures.
11 
> Illumina Stranded mRNA Prep, Ligation Reference Guide
• FSA (9 μl) 
• RVT (1 μl) Volumes include reagent overage for accurate pipetting. 2. Thoroughly pipette First Strand Synthesis Master Mix to mix. 3. Centrifuge the sealed PCR plate at 280 × g for 10 seconds. 4. Add 8 μl First Strand Synthesis Master Mix to each well. 5. Pipette 10 times, and then seal. 6. Place on the preprogrammed thermal cycler and run the FSS program. Total program time is ~43 minutes and each well contains a volume of 25 μl. 
# Synthesize Second Strand cDNA 
This step removes the RNA template and synthesizes a replacement strand to generate blunt-ended, double-stranded cDNA fragments. In place of deoxythymidine triphosphate (dTTP), deoxyuridine triphosphate (dUTP) is incorporated to quench the second strand during amplification and achieve strand specificity. 
Consumables 
• RSB (Resuspension Buffer) 
• SMM (Second Strand Marking Master Mix) 
• Agencourt AMPure XP 
• Freshly prepared 80% ethanol (EtOH) 
• 96-well PCR plate, semiskirted 
• Microseal 'B' adhesive film 
About Reagents 
• Prepare 80% EtOH fresh and discard after one day. The protocol has three cleanup steps that require fresh 80% EtOH. 
# Preparation 
1. Prepare 80% EtOH from absolute EtOH. 2. Save the following SSS program on the thermal cycler: 
• Choose the preheat lid option and set to 40°C 
• Reaction volume is 50 μl 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
12 
Illumina Stranded mRNA Prep, Ligation Reference Guide • 16°C for 1 hour 
• Hold at 4°C for ≤ 16 hours 
# Procedure 
Generate cDNA 
1. Centrifuge the sealed PCR plate at 280 × g for 10 seconds. 2. Add 25 μl SMM to each well. 3. Pipette 10 times, and then seal. 4. Place on the preprogrammed thermal cycler and run the SSS program. Total program time is ~1 hour and each well contains a volume of 50 μl. 
Clean Up cDNA 
1. Centrifuge the sealed PCR plate at 280 × g for 10 seconds. 2. Vortex AMPure XP to resuspend. 3. Add 90 μl AMPure XP to each well. 4. Mix using either method: 
• Seal and shake at 2000 rpm for 1 minute, and then centrifuge at 280 × g for 10 seconds. 
• Slowly pipette until the beads are resuspended. 5. Incubate at room temperature for 5 minutes. 6. Place on the magnetic stand and wait 5 minutes. 7. Remove and discard 130 μl supernatant. 8. Wash beads as follows. a. Keep on the magnetic stand and add 175 μl fresh 80% EtOH to each well. b. Wait 30 seconds. c. Remove and discard all supernatant. 9. Repeat wash a second time. 10. With a 20 μl pipette, remove all residual EtOH. 11. Air-dry on the magnetic stand for 2 minutes. Do not over-dry the beads. 12. Remove from the magnetic stand. 13. Add 19.5 μl RSB to each well. 14. Mix using either method: 
• Seal and shake at 2200 rpm for 1 minute. 
• Slowly pipette until the beads are resuspended, and then seal. 
> Document # 1000000124518 v02
> For Research Use Only. Not for use in diagnostic procedures.
13 
> Illumina Stranded mRNA Prep, Ligation Reference Guide
15. If shaking did not fully resuspend the beads, slowly pipette until the beads are resuspended, and then seal. 16. Incubate at room temperature for 2 minutes. 17. Centrifuge at 280 × g for 10 seconds. 18. Place on the magnetic stand and wait 2 minutes. 19. Transfer 17.5 μl supernatant from each well to a new PCR plate. Small amounts of bead carryover do not affect performance. 
SAFE STOPPING POINT 
If you are stopping, seal the plate and store at -25°C to -15°C for up to 7 days. 
# Adenylate 3ʹ Ends 
This step adds an adenine (A) nucleotide to the 3ʹ ends of the blunt fragments to prevent them from ligating to each other during adapter ligation. A corresponding thymine (T) nucleotide on the 3ʹ end of the adapter provides a complementary overhang for ligating the adapter to the fragment. 
Consumables 
• ATL4 (A-Tailing Mix) 
• Microseal 'B' adhesive film 
• Prepare for a later procedure: 
– Anchor plate (RNA Index Anchors) 
– STL (Stop Ligation Buffer) 
# Preparation 
1. Prepare the following consumables: 
Reagent Storage Instructions 
Anchor plate -25°C to -15°C Thaw at room temperature. Vortex to mix, and then centrifuge briefly. ATL4 -25°C to -15°C Thaw at room temperature. Flick to mix, and then centrifuge briefly. STL -25°C to -15°C Thaw at room temperature. Vortex to mix, and then centrifuge briefly. 2. Save the following ATAIL program on the thermal cycler: 
• Choose the preheat lid option and set to 100°C 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
14 
Illumina Stranded mRNA Prep, Ligation Reference Guide • Reaction volume is 30 μl 
• 37°C for 30 minutes 
• 70°C for 5 minutes 
• Hold at 4°C 
# Procedure 
1. If you are resuming the protocol after a safe stopping point, centrifuge the sealed PCR plate at 280 × g for 10 seconds. 2. Add 12.5 μl ATL4 to each well. 3. Using a 200 μl pipette, pipette 10 times to mix, and then seal. 4. Place on the preprogrammed thermal cycler and run the ATAIL program. Total program time is ~38 minutes and each well contains a volume of 30 μl. 
# Ligate Anchors 
This step ligates pre-index anchors to the ends of the double-stranded cDNA fragments to prepare them for dual indexing. A subsequent PCR amplification step adds the index adapter sequences. 
Consumables 
• Anchor plate (RNA Index Anchors) (green plate) 
• LIGX (Ligation Mix) 
• STL (Stop Ligation Buffer) 
• RSB (Resuspension Buffer) 
• Microseal 'B' adhesive film 
• Prepare for a later procedure: 
– Agencourt AMPure XP 
About Reagents 
• Although stored at -25°C to -15°C, LIGX remains liquid and does not require thawing. 
• Each well of the anchor plate is single-use and contains RNA Index Anchors. Anchor plate wells contain the same content and can be used in any order. 
• The anchor plate is green and is distinct from the index adapter plate, which is colorless and used in a later step. Check the plate labels to make sure you are using the correct plate. 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
15 
Illumina Stranded mRNA Prep, Ligation Reference Guide Preparation 
1. Prepare the following consumables: 
Reagent Storage Instructions 
AMPure XP 2°C to 8°C Let stand for 30 minutes to bring to room temperature. Vortex and invert to mix. LIGX -25°C to -15°C Store until needed. Flick to mix, and then centrifuge briefly. RSB -25°C to -15°C Thaw at room temperature. Vortex and invert to mix. 2. Save the following LIG program on the thermal cycler: 
• Choose the preheated lid option and set to 100°C 
• Reaction volume is 38 μl 
• 30°C for 10 minutes 
• Hold at 4°C 
# Procedure 
Add Anchors 
1. Centrifuge the sealed PCR plate at 280 × g for 10 seconds. 2. Add the following volumes to each well in the order listed . Transfer RNA Index Anchors from the anchor plate to the PCR plate. 
Order of Addition Reagent Volume for Sample Input ≤ 100 ng (μl) Volume for Sample Input > 100 ng (μl) 
1 RSB 2.5 02 RNA Index Anchors 2.5 53 LIGX 2.5 2.5 3. Using a 200 μl pipette, pipette 10 times to mix, and then seal. 4. Place on the preprogrammed thermal cycler and run the LIG program. Total program time is ~13 minutes and each well contains a volume of 38 μl. 
Stop Ligation 
1. Centrifuge the sealed PCR plate at 280 × g for 10 seconds. 2. Add 5 μl STL to each well. 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
16 
Illumina Stranded mRNA Prep, Ligation Reference Guide 3. Pipette 15 times to mix. Each well contains a volume of 43 μl. 
# Clean Up Fragments 
This step uses magnetic beads to purify the adapter-ligated fragments. 
Consumables 
• RSB (Resuspension Buffer) 
• Agencourt AMPure XP 
• Freshly prepared 80% ethanol (EtOH) 
• 96-well PCR plate, semiskirted 
• Microseal 'B' adhesive film 
# Procedure 
1. Vortex AMPure XP to resuspend. 2. Add 34 μl AMPure XP to each well. 3. Mix using either method: 
• Seal and shake at 2000 rpm for 1 minute, and then centrifuge at 280 × g for 10 seconds. 
• Slowly pipette until the beads are resuspended. 4. Incubate at room temperature for 5 minutes. 5. Place on the magnetic stand and wait 5 minutes. 6. Remove and discard 67 μl supernatant. 7. Wash beads as follows. a. Keep on the magnetic stand and add 175 μl fresh 80% EtOH to each well. b. Wait 30 seconds. c. Remove and discard all supernatant. 8. Wash beads a second time. 9. With a 20 μl pipette, remove all residual EtOH. 10. Air-dry on the magnetic stand for 2 minutes. Do not over-dry the beads. 11. Remove from the magnetic stand. 12. Add 22 μl RSB to each well. 13. Mix using either method: 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
17 
Illumina Stranded mRNA Prep, Ligation Reference Guide • Seal and shake at 2200 rpm for 1 minute. 
• Slowly pipette until the beads are resuspended, and then seal. 14. If shaking did not fully resuspend the beads, slowly pipette until the beads are resuspended, and then seal. 15. Incubate at room temperature for 2 minutes. 16. Centrifuge at 280 × g for 10 seconds. 17. Place on the magnetic stand and wait 2 minutes. 18. Transfer 20 μl supernatant to the corresponding well of a new PCR plate. Amplification PCR cycles vary by input amount. When multiple samples are prepared, transfer to separate plates according to the number of PCR cycles specified in the Amplify Library on page 18 procedure. 
SAFE STOPPING POINT 
If you are stopping, seal the plate and store at -25°C to -15°C for up to 7 days. 
# Amplify Library 
This step uses PCR to selectively amplify the anchor-ligated DNA fragments and add indexes and primer sequences for cluster generation. The resulting product is a dual-indexed library: DNA fragments with adapters at each end. For help with selecting index adapters, see Pooling Preparation on page 3. 
Consumables 
• EPM (Enhanced PCR Mix) 
• Index adapter plate (UDP0XXX) 
About Reagents 
• Each well of the index adapter plate is single-use and contains > 10 μl UDP0XXX, which are premixed Index 1 (i7) and Index 2 (i5) adapters. 
• The row and column labels are printed on the underside of the index adapter plate. Raise the plate overhead to check the labels. 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
18 
Illumina Stranded mRNA Prep, Ligation Reference Guide Preparation 
1. Prepare the following consumables: 
Reagent Storage Instructions 
EPM -25°C to -15°C Thaw at room temperature. Invert to mix, and then centrifuge briefly. Index adapter plate -25°C to -15°C Thaw at room temperature. Vortex to mix, and then centrifuge at 1000 × g for 1 minute. 2. Save the following PCR program on a thermal cycler using the appropriate number of PCR cycles, which are listed in the following table: 
• Choose the preheat lid option and set to 100°C 
• Reaction volume is 50 μl 
• 98°C for 30 seconds 
• X cycles of: 
• 98°C for 10 seconds 
• 60°C for 30 seconds 
• 72°C for 30 seconds 
• 72°C for 5 minutes 
• Hold at 4°C for ≤ 16 hours Adjust the program to optimize for different input amount. When multiple samples are amplified on one plate, make sure that the input for each sample is the same. 
Input Amount (ng) Number of PCR Cycles (X) 
25 15 100 13 1000 10 Total program time is ~44 minutes for 15 cycles, ~39 minutes for 13 cycles, and ~33 minutes for 10 cycles. 
# Procedure 
1. If you are resuming the protocol after a safe stopping point, centrifuge the sealed PCR plate at 280 × g for 10 seconds. 2. Using a new pipette tip for each well, pierce the foil covering the index adapter plate wells that you intend to use. 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
19 
Illumina Stranded mRNA Prep, Ligation Reference Guide 3. Add the following volumes to each well of the PCR plate in the order listed . Transfer UDP0XXX from the index adapter plate to the PCR plate. 
• UDP0XXX (10 μl) 
• EPM (20 μl) 4. Pipette 10 times to mix, and then seal. 5. Place on the preprogrammed thermal cycler and run the PCR program. Each well contains a volume of 50 μl. 
SAFE STOPPING POINT 
If you are stopping, seal the plate and store at -25°C to -15°C for up to 7 days. 
# Clean Up Library 
This step uses magnetic beads to purify the dual-indexed libraries. 
Consumables 
• RSB (Resuspension Buffer) 
• Agencourt AMPure XP 
• Freshly prepared 80% EtOH 
• 96-well PCR plate, semiskirted 
• Microseal 'B' adhesive film 
# Preparation 
1. Prepare the following consumables: 
Reagent Storage Instructions 
AMPure XP 2°C to 8°C Let stand for 30 minutes to bring to room temperature. Vortex and invert to mix. RSB -25°C to -15°C Thaw at room temperature. Vortex and invert to mix. 
# Procedure 
1. Centrifuge the sealed PCR plate at 280 × g for 10 seconds. 2. Vortex AMPure XP to resuspend. 3. Add 50 μl AMPure XP to each well. 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
20 
Illumina Stranded mRNA Prep, Ligation Reference Guide 4. Mix using either method: 
• Seal and shake at 2000 rpm for 1 minute, and then centrifuge at 280 × g for 10 seconds. 
• Slowly pipette until the beads are resuspended. 5. Incubate at room temperature for 5 minutes. 6. Place on the magnetic stand and wait 5 minutes. 7. Remove and discard 90 μl supernatant. 8. Wash beads as follows. a. Keep on the magnetic stand and add 175 μl fresh 80% EtOH to each well. b. Wait 30 seconds. c. Remove and discard all supernatant. 9. Wash beads a second time. 10. With a 20 μl pipette, remove all residual EtOH. 11. Air-dry on the magnetic stand for 2 minutes. Do not over-dry the beads. 12. Remove from the magnetic stand. 13. Add 17 μl RSB to each well. 14. Mix using either method: 
• Seal and shake at 2200 rpm for 1 minute. 
• Slowly pipette until the beads are resuspended, and then seal. 15. If shaking did not fully resuspend the beads, slowly pipette until the beads are resuspended, and then seal. 16. Incubate at room temperature for 2 minutes. 17. Centrifuge at 280 × g for 10 seconds. 18. Place on the magnetic stand and wait 2 minutes. 19. Transfer 15 μl supernatant from each well to the corresponding well of a new PCR plate. 
SAFE STOPPING POINT 
If you are stopping, seal the plate with Microseal 'B' or Microseal 'F' and store at -25°C to -15°C for up to 30 days. 
# Check Library 
This step checks the concentration and quality of the final libraries. 1. Analyze library using one of the following methods: 
• If using the NextSeq 1000/2000 Sequencing System, dilute libraries to 1:10000x dilution, and then analyze 2 μl library using KAPA qPCR library quantification kit. 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
21 
Illumina Stranded mRNA Prep, Ligation Reference Guide • For all other sequencing systems, analyze 1 μl library using the Agilent 2100 Bioanalyzer and DNA 1000 Kit. The following figure provides an example trace for a final library generated from 25 ng Universal Human Reference (UHR) RNA input. Figure 2 Example Bioanalyzer Trace 
2. [Optional] Analyze 2 μl library using the Qubit dsDNA BR Assay Kit for further quantification. For intact RNA samples, the average fragment length is ~300–400 bp. The expected insert size is ~160 bp. 
> Document # 1000000124518 v02
> For Research Use Only. Not for use in diagnostic procedures.
22 
> Illumina Stranded mRNA Prep, Ligation Reference Guide
# Dilute Library to the Starting Concentration 
This step dilutes libraries to the starting concentration for the NovaSeq 6000, NextSeq 500, NextSeq 550, NextSeq 1000, and NextSeq 2000 System. After diluting to the starting concentration, libraries are ready to be denatured and diluted to the final loading concentration. Illumina recommends paired-end runs for sequencing. The number of cycles per index read is 10, and the number of cycles per read varies depending on the sequencing system. 1. Obtain the molarity value of the library or pooled libraries using the applicable method: 
• For libraries quantified with a Bioanalyzer only, use the molarity value obtained for the library. 
• For libraries quantified with a Bioanalyzer and Qubit, use the following formula to calculate the molarity value. Apply the average size from the Bioanalyzer and the concentration from the Qubit. 
• For libraries quantified with a KAPA qPCR, use the molarity value obtained for the library and 300–400 bp as the average library insert size. 
2. Using the molarity value, calculate the volumes of RSB and library needed to dilute libraries to the starting concentration for your system. 
Sequencing System Starting Concentration (nM) Final Loading Concentration (pM) 
NextSeq 550 and NextSeq 500 1 1.1–1.4 NextSeq 1000 and NextSeq 2000 2 750 NovaSeq 6000 0.5 100 3. Dilute each library to the starting concentration for your system using RSB. Combine 10 μl each diluted library in a tube to pool libraries. 4. Follow the denature and dilute instructions for your system to dilute libraries to the final loading concentration. If you are using the NextSeq 1000/2000 Control Software v1.2 and are not performing dark cycle sequencing, make sure to trim the T-overhang. See the NextSeq 1000/2000 Sequencing System Guide (document # 1000000109376) for more information on dark cycle sequencing. 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
23 
Illumina Stranded mRNA Prep, Ligation Reference Guide Trim T-Overhang (Optional) 
This step trims the first cycle nucleotide at FASTQ generation, removing the T overhang. See NextSeq 1000/2000 Sequencing System Guide (document # 1000000109376 for more information on dark cycle sequencing. Illumina Stranded mRNA adds a T nucleotide to cDNA inserts, which enables ligation of the insert to the adapter. The addition of the T nucleotide creates low diversity in the first cycle of each insert read, which can result in random base calls at the first sequencing cycle. To improve analysis quality, Illumina recommends trimming the first cycle nucleotide. 1. To trim using the FASTQ Toolkit app on BaseSpace Sequence Hub, perform the following actions. a. Expand the base trimming settings section. b. Enter 1 in the Trim reads at the 5ʹ-end by n positions field. 2. To trim using a sample sheet, add the following settings to the sample sheet file. 
• Read1StartFromCycle,2 
• Read2StartFromCycle,2 
CAUTION FASTQ generation supports only one setting per run. To ensure correct settings for your libraries, use a separate sample sheet to demultiplex libraries without T-overhang. 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
24 
Illumina Stranded mRNA Prep, Ligation Reference Guide Appendix A Supporting Information 
# Supporting Information 
# Introduction 
The protocol described in this guide assumes that you have reviewed the contents of this appendix, confirmed kit contents, and obtained all required consumables and equipment. 
# Acronyms 
Acronym Definition 
A Adenine ATL4 A-Tailing Mix BBB Bead Binding Buffer BWB Bead Washing Buffer cDNA Complementary DNA dsDNA Double-stranded DNA dTTP Deoxythymidine triphosphate dUTP Deoxyuridine triphosphate ELB Elution Buffer EPH3 Elute, Prime, Fragment 3HC Mix EPM Enhanced PCR Mix EtOH Ethanol FSA First Strand Synthesis Mix LIGX Ligation Mix mRNA Messenger RNA PCR Polymerase chain reaction RIN RNA Integrity Number RPBX RNA Purification Beads RSB Resuspension Buffer Acronym Definition 
SMM Second Strand Master Mix STL Stop Ligation Buffer T Thymine UD Unique dual UHR Universal Human Reference 
# Kit Contents and Storage 
Make sure that you have all reagents identified in this section before starting library prep. The protocol requires one Illumina Stranded mRNA Prep, Ligation kit and at least one set of IDT for Illumina RNA UD Indexes. Combine all four sets to index up to 384 libraries. 
Component Kit Name Illumina Catalog #
Library prep Illumina Stranded mRNA Prep, Ligation (16 Samples) 20040532 Illumina Stranded mRNA Prep, Ligation (96 Samples) 20040534 Indexes IDT for Illumina RNA UD Indexes Set A, Ligation (96 Indexes, 96 Samples) 20040553 IDT for Illumina RNA UD Indexes Set B, Ligation (96 Indexes, 96 Samples) 20040554 IDT for Illumina RNA UD Indexes Set C, Ligation (96 Indexes, 96 Samples) 20040555 IDT for Illumina RNA UD Indexes Set D, Ligation (96 Indexes, 96 Samples) 20040556 The prep kits provide reagents for mRNA selection, cDNA synthesis, and library prep in a 16- or 96-sample size. The indexes sets provide premixed Index 1 (i7) and Index 2 (i5) adapters with the adapters necessary for ligation. The Illumina kits do not include Agencourt AMPure XP beads. For supplier information, see Consumables and Equipment 
on page 30. Illumina Stranded mRNA Prep, Ligation (16 Samples) (20040532) 
Illumina PolyA Capture 
Quantity Reagent Description Cap Shipment Storage 
1 BBB Bead Binding Buffer Clear 2°C to 8°C 2°C to 8°C 3 BWB Bead Washing Buffer Yellow 2°C to 8°C 2°C to 8°C 1 ELB Elution Buffer Clear 2°C to 8°C 2°C to 8°C 1 RPBX RNA Purification Beads Clear 2°C to 8°C 2°C to 8°C 
Illumina cDNA Synthesis 
Quantity Reagent Description Cap Shipment Storage 
1 EPH3 Elute, Prime, Fragment 3HC Mix Clear -25°C to -15°C -25°C to -15°C 1 FSA First Strand Synthesis Mix Amber -25°C to -15°C -25°C to -15°C 1 RSB Resuspension Buffer Clear -25°C to -15°C -25°C to -15°C 1 RVT Reverse Transcriptase Clear -25°C to -15°C -25°C to -15°C 1 SMM Second Strand Marking Master Mix Clear -25°C to -15°C -25°C to -15°C 
Illumina RNA Prep, Ligation 
Quantity Reagent Description Cap Shipment Storage 
1 ATL4 A-Tailing Mix Clear -25°C to -15°C -25°C to -15°C 1 EPM Enhanced PCR Mix Clear -25°C to -15°C -25°C to -15°C 1 LIGX Ligation Mix Clear -25°C to -15°C -25°C to -15°C 1 RSB Resuspension Buffer Clear -25°C to -15°C -25°C to -15°C 1 STL Stop Ligation Buffer Red -25°C to -15°C -25°C to -15°C Illumina Stranded mRNA Prep, Ligation (96 Samples) (20040534) 
Illumina PolyA Capture 
Quantity Reagent Description Cap Shipment Storage 
1 BBB Bead Binding Buffer Clear 2°C to 8°C 2°C to 8°C 1 BWB Bead Washing Buffer Clear 2°C to 8°C 2°C to 8°C 3 ELB Elution Buffer Clear 2°C to 8°C 2°C to 8°C 4 RPBX RNA Purification Beads Clear 2°C to 8°C 2°C to 8°C 
Illumina cDNA Synthesis 
Quantity Reagent Description Cap Shipment Storage 
4 EPH3 Elute, Prime, Fragment 3HC Mix Clear -25°C to -15°C -25°C to -15°C 4 FSA First Strand Synthesis Mix Amber -25°C to -15°C -25°C to -15°C 2 RSB Resuspension Buffer Clear -25°C to -15°C -25°C to -15°C 1 RVT Reverse Transcriptase Clear -25°C to -15°C -25°C to -15°C 4 SMM Second Strand Marking Master Mix Clear -25°C to -15°C -25°C to -15°C 
Illumina RNA Prep, Ligation 
Quantity Reagent Description Cap Color Shipment Storage 
4 ATL4 A-Tailing Mix Clear -25°C to -15°C -25°C to -15°C 4 EPM Enhanced PCR Mix Clear -25°C to -15°C -25°C to -15°C 4 LIGX Ligation Mix Clear -25°C to -15°C -25°C to -15°C 4 RSB Resuspension Buffer Clear -25°C to -15°C -25°C to -15°C 4 STL Stop Ligation Buffer Red -25°C to -15°C -25°C to -15°C IDT for Illumina RNA UD Indexes Set A, Ligation (96 Indexes, 96 Samples) (20040553) 
Quantity Description Shipment Storage 
1 IDT for Illumina RNA Index Anchors -25°C to -15°C -25°C to -15°C 1 IDT for Illumina DNA/RNA UD Indexes Set A (UDP0001–UDP0096) -25°C to -15°C -25°C to -15°C 
# IDT for Illumina RNA UD Indexes Set B, Ligation (96 Indexes, 96 Samples) (20040554) 
Quantity Description Shipment Storage 
1 IDT for Illumina RNA Index Anchors -25°C to -15°C -25°C to -15°C 1 IDT for Illumina DNA/RNA UD Indexes Set B (UDP0097– UDP0192) -25°C to -15°C -25°C to -15°C 
# IDT for Illumina RNA UD Indexes Set C, Ligation (96 Indexes, 96 Samples) (2004555) 
Quantity Description Shipment Storage 
1 IDT for Illumina RNA Index Anchors -25°C to -15°C -25°C to -15°C 1 IDT for Illumina DNA/RNA UD Indexes Set C (UDP0193– UDP0288) -25°C to -15°C -25°C to -15°C 
# IDT for Illumina RNA UD Indexes Set D, Ligation (96 Indexes, 96 Samples) (20040556) 
Quantity Description Shipment Storage 
1 IDT for Illumina RNA Index Anchors -25°C to -15°C -25°C to -15°C 1 IDT for Illumina DNA/RNA UD Indexes Set D (UDP0289– UDP0384) -25°C to -15°C -25°C to -15°C Consumables and Equipment 
The protocol has been optimized and validated using the items listed. When using alternate consumables and equipment, comparable performance is not guaranteed. 
# Ancillary Consumables 
Consumable Supplier 
1.7 ml microcentrifuge tubes, RNase-free General lab supplier 20 μl barrier pipette tips General lab supplier 200 μl barrier pipette tips General lab supplier 1000 μl barrier pipette tips General lab supplier 96-well twin.tec 250 μl PCR plates, semiskirted One of the following suppliers: • Fisher Scientific, catalog # E951020303 • VWR, catalog # 47744-106 Agencourt AMPureXP, 60 ml Beckman Coulter, catalog # A63881 Agilent DNA 1000 Kit Agilent Technologies, catalog # 5067-1504 Conical centrifuge tubes (15 ml or 50 ml) General lab supplier Ethyl alcohol, pure (500 ml) Sigma-Aldrich, catalog # E7023 Microseal 'B' PCR Plate Sealing Film Bio-Rad, catalog # MSB-1001 Nuclease-free ultrapure water General lab supplier RNase/DNase-free multichannel reagent reservoirs, disposable VWR, catalog # 89094-658 RNaseZap¹ General lab supplier [Optional] Universal Human Reference RNA positive sample control Agilent Technologies, catalog # 740000 [Optional] Agilent RNA 6000 Pico Kit Agilent Technologies, catalog # Q32856 [Optional] Qubit Assay Tubes Thermo Fisher Scientific, catalog # Q32856 [Optional] Qubit dsDNA BR Assay Kit Thermo Fisher Scientific, catalog # Q32850 or Q32853 
¹ To decontaminate surfaces. Ancillary Equipment 
Equipment Supplier 
20 μl multichannel pipettes General lab supplier 20 μl single channel pipettes General lab supplier 200 μl multichannel pipettes General lab supplier 200 μl single channel pipettes General lab supplier 1000 μl single channel pipettes General lab supplier 2100 Bioanalyzer System Agilent Technologies, catalog # G2939BA [Shaking workflow] BioShake iQ high-speed thermoshaker Q Instruments, catalog # 1808-0506 [Shaking workflow] BioShake PCR plate adapter Q Instruments, catalog # 1808-1041 One of the following magnets: • [Shaking workflow] DynaMag-96 Side Magnet • [Pipette workflow] Magnetic Stand-96 The applicable supplier: • Thermo Fisher Scientific, catalog # 12331D • Thermo Fisher Scientific, catalog # AM10027 Microplate centrifuge General lab supplier One of the following 96-well thermal cyclers: • Bio-Rad C1000 Touch Thermal Cycler • T100 Thermal Cycler The applicable supplier: • Bio-Rad, catalog # 1851196 • Bio-Rad, catalog # 1861096EDU Vortexer General lab supplier [Optional] Qubit 2.0 Fluorometer Thermo Fisher Scientific, catalog # Q32866 Technical Assistance 
For technical assistance, contact Illumina Technical Support. 
Website: www.illumina.com 
Email: techsupport@illumina.com 
Illumina Technical Support Telephone Numbers 
Region Toll Free International Australia +61 1800 775 688 
Austria +43 800 006249 +43 1 9286540 
Belgium +32 800 77 160 +32 3 400 29 73 
Canada +1 800 809 4566 
China +86 400 066 5835 
Denmark +45 80 82 01 83 +45 89 87 11 56 
Finland +358 800 918 363 +358 9 7479 0110 
France +33 8 05 10 21 93 +33 1 70 77 04 46 
Germany +49 800 101 4940 +49 89 3803 5677 
Hong Kong, China +852 800 960 230 
India +91 8006500375 
Indonesia 0078036510048 
Ireland +353 1800 936608 +353 1 695 0506 
Italy +39 800 985513 +39 236003759 
Japan +81 0800 111 5011 
Malaysia +60 1800 80 6789 
Netherlands +31 800 022 2493 +31 20 713 2960 
New Zealand +64 800 451 650 
Norway +47 800 16 836 +47 21 93 96 93 
Philippines +63 180016510798 
Singapore 1 800 5792 745 
South Korea +82 80 234 5300 
Document # 1000000124518 v02 
For Research Use Only. Not for use in diagnostic procedures. 
32 Region Toll Free International Spain +34 800 300 143 +34 911 899 417 
Sweden +46 2 00883979 +46 8 50619671 
Switzerland +41 800 200 442 +41 56 580 00 00 
Taiwan, China +886 8 06651752 
Thailand +66 1800 011 304 
United Kingdom +44 800 012 6019 +44 20 7305 7197 
United States +1 800 809 4566 +1 858 202 4566 
Vietnam +84 1206 5263 
Safety data sheets (SDSs) —Available on the Illumina website at support.illumina.com/sds.html. 
Product documentation —Available for download from support.illumina.com. 
> Document # 1000000124518 v02
> For Research Use Only. Not for use in diagnostic procedures.
33 
> Illumina Stranded mRNA Prep, Ligation Reference Guide
Illumina 5200 Illumina Way San Diego, California 92122 U.S.A. +1.800.809.ILMN (4566) +1.858.202.4566 (outside North America) techsupport@illumina.com www.illumina.com 
For Research Use Only. Not for use in diagnostic procedures. 
© 2021 Illumina, Inc. All rights reserved. 
Document # 1000000124518 v02