# NEBNext Ultra II Directional RNA Library Prep Kit for Illumina E7760 E7765 manual
URL: https://www.neb.com/en/-/media/nebus/files/manuals/manuale7760_e7765.pdf
1
# INSTRUCTION MANUAL 
# NEBNext ® Ultra ™ II Directional RNA Library Prep Kit for Illumina ®
# NEB #E7760S/L, #E7765S/L 24/96 reactions 
Version 7.0_4/25 
# Table of Contents 
Required Materials Not Included ......................................................................................................................................................... 2
Considerations on Choosing an RNA-seq Library Preparation Method ............................................................................................. 3
NEBNext Ultra II Directional RNA Product Selection Guide ............................................................................................................ 3
Overview .............................................................................................................................................................................................. 3
Section 1A Protocol for use with Non -Indexed adaptor, NEBNext Poly(A) mRNA Magnetic Isolation Module (NEB #E7490) (Express Protocol) and NEBNext Ultra II Directional RNA Library Prep Kit for Illumina (NEB #E7760, #E7765 ........................................ 5
Section 1B Protocol for use with Non -Indexed adaptor, NEBNext Poly(A) mRNA Magnetic Isolation Module (NEB #E7490) (Standard Protocol) and NEBNext Ultra II Directional RNA Library Prep Kit for Illumina (NEB #E7760, #E7765) .................................... 14 
Section 2 Protocol for use with Non- Indexed Adaptor, NEBNext rRNA Depletion Kit v2 (Human/Mouse/Rat) (NEB #E7400, #E7405) and NEBNext Ultra II Directional RNA Library Prep Kit for Illumina (NEB #E7760, #E7765) ........................................................... 22 
Section 3 Protocol for use with FFPE RNA, Non-Indexed Adaptor, NEBNext rRNA Depletion Kit v2 (Human/Mouse/Rat) (NEB #E7400, #E7405) and NEBNext Ultra II Directional RNA Library Prep Kit for Illumina (NEB #E7760, #E7765) ...................................... 32 
Section 4 Protocols for use with Purified mRNA or rRNA Depleted RNA, Non-Indexed Adaptor and NEBNext Ultra II Directional RNA Library Prep Kit for Illumina (NEB #E7760, E7765) ....................................................................................................................... 40 
Section 5 Protocol for use with rRNA Depleted FFPE RNA, Non -Indexed Adaptor and NEBNext Ultra II Directional RNA Library Prep Kit for Illumina (NEB #E7760, E7765) ................................................................................................................................................... 47 
Section 6 Appendix A ....................................................................................................................................................................................... 53 
Section 7 Troubleshooting Guide ..................................................................................................................................................................... 57 
Kit Components ................................................................................................................................................................................. 59 
Revision History ................................................................................................................................................................................ 61 
# The Library Prep Kit Includes 
The volumes provided are sufficient for preparation of up to 24 reactions (NEB #E7760S/#E7765S) and 96 reactions (NEB #E7760L/#E7765L). 
Package 1: Store at –20°C. 
# • (lilac) NEBNext First Strand Synthesis Reaction Buffer 
# • (lilac) Random Primers 
# • (lilac) NEBNext First Strand Synthesis Enzyme Mix 
# • (brown) NEBNext Strand Specificity Reagent 2
# • (orange) NEBNext Second Strand Synthesis Enzyme Mix 
# • (orange) NEBNext Second Strand Synthesis Reaction Buffer with dUTP Mix 
# • (green) NEBNext Ultra II End Prep Enzyme Mix 
# • (green) NEBNext Ultra II End Prep Reaction Buffer 
# • (red) NEBNext Ultra II Ligation Master Mix 
# • (red) NEBNext Ligation Enhancer 
# • (blue) NEBNext USER ® Enzyme 
# • (blue) NEBNext Ultra II Q5 ® Master Mix 
> NEBNext Adaptor Dilution Buffer
> (0.1X) TE Buffer
> Nuclease-free Water
> Package 2: Store at room temperature. Do not freeze.
> Supplied only with NEBNext Ultra II Directional RNA Library Prep with Sample Purification Beads, NEB #E7765.
> NEBNext Sample Purification Beads
# Required Materials Not Included 
NEBNext Oligo Kit options can be found at  http://www.neb.com/oligos 
Alternatively, customer supplied adaptor and primers can be used, please see:  www.neb.com/faq-nonNEB-adaptors 
Please note: Separate instructions exist for UNIQUE DUAL INDEX UMI ADAPTORS. Please contact Technical Support at  info@neb.com  
> •
Magnetic rack (NEB #S1515S), magnetic plate (Alpaqua ® cat. #A001322) or equivalent  
> •
80% Ethanol (freshly prepared)  
> •
Thermal cycler  
> •
Thin wall 200 μl PCR tubes (For example Tempassure PCR flex-free 8-tube strips USA Scientific #1402-4708)  
> •
Vortex mixer  
> •
Agilent ® Bioanalyzer ® or similar fragment analyzer and associated consumables  
> •
Microcentrifuge 
For NEB #E7760 only:  
> •
SPRIselect ® Reagent Kit (Beckman Coulter, Inc. #B23317) or AMPure ® XP Beads (Beckman Coulter, Inc. #A63881)  
> •
In NEB #E7765 beads are included [Sample Purification Beads (NEB #E7767)] 
For use with NEBNext Poly(A) mRNA Magnetic Isolation Module:  
> •
NEB #E7490 (not included)  
> •
96-well 0.2 ml PCR Plates and Microseal ® 'B' Adhesive Sealer (BioRad MSB-1001) or 0.2 ml RNase-free tube  
> •
1.5 ml Microcentrifuge tube and NEB #S1506 Magnet stand or equivalent (for washing beads only) 
For use with NEBNext Ribosomal Depletion Kit:  
> •
NEB #E7400 (not included) Agencourt ® RNAClean ® XP Beads (Beckman Coulter, Inc. #A63987)  
> •
In NEB #E7405, beads are included [RNA Sample Purification Beads (NEB #E6351)] 3
Adaptor trimming sequences: 
The NEBNext libraries for Illumina resemble TruSeq libraries and can be trimmed similar to TruSeq: 
Read 1 AGATCGGAAGAGCACACGTCTGAACTCCAGTCA 
Read 2 AGATCGGAAGAGCGTCGTGTAGGGAAAGAGTGT 
# Considerations on Choosing an RNA-seq Library Preparation Method 
The library preparation protocol should be chosen based on the goals of the project and quality of the RNA sample. Total cellular RNA is mainly composed of rRNA and often is not of interest. rRNA can be removed from total cellular RNA by one of two common methods. The first method uses oligo d(T) beads, which bind to the poly(A) tail of eukaryotic mRNA. Alternatively, rRNA can be depleted using rRNA specific probes. NEB offers the NEBNext Poly(A) mRNA Magnetic Isolation Module (NEB #E7490) and the NEBNext rRNA Depletion Kit v2 (Human/Mouse/Rat) with or without RNA Sample Purification Beads (NEB #E7400/ #E7405) for the enrichment of non-ribosomal RNA. 
In the oligo d(T) approach, only mRNA with poly(A) tails will be enriched; other cellular RNA without a poly(A) tail, such as non-coding RNA or mRNA lacking poly(A) will not bind to the beads. In addition, mRNA from some organisms (e.g., prokaryotes) or degraded RNA (e.g., FFPE RNA) do not have poly(A) tails, and will not be captured by oligo d(T) beads. On the other hand, the probe based rRNA depletion kit will remove the targeted ribosomal RNA, but it will preserve other biologically relevant cellular RNA such as non-coding RNA or mRNA. 
The quality of an RNA sample should also be considered when deciding on a library preparation protocol. The NEBNext Poly(A) mRNA Magnetic Isolation Module should only be used with high quality RNA samples (RIN > 7), since degradation results in a loss of poly(A) 
tails from mRNA molecules. For partially degraded or heavily degraded samples (e.g., RIN ≤ 7, FFPE RNA), the NEBNext rRNA 
Depletion Kit should be used. For libraries without any enrichment or depletion of total RNA, use Section 4 for high quality RNA (RIN > 7) or Section 5 for degraded or FFPE RNA (RIN < 7). 
Please refer to the product page on NEB.com for FAQs about this product. 
# NEBNext Ultra II Directional RNA Product Selection Guide 
The library preparation protocol should be chosen based on the goals of the project and quality of the RNA sample. Total cellular RNA is mainly composed of rRNA and often is not of interest. rRNA can be removed from total cellular RNA by one of two common methods. The first method uses oligo d(T) beads, which bind to the poly(A) tail of eukaryotic mRNA. Alternatively, rRNA can be depleted using rRNA specific probes. NEB offers the NEBNext Poly(A) mRNA Magnetic Isolation Module (NEB #E7490) and the NEBNext rRNA Depletion Kit v2 (Human/Mouse/Rat) with or without RNA Sample Purification Beads (NEB #E7400/ #E7405) for the enrichment of non-ribosomal RNA. 
Figure 1. NEBNext Ultra II Directional RNA Product Selection Guide. 
Select the right NEBNext Multiplex Oligos for your experiment at  www.neb.com/oligos .
Please note: A separate manual exists for UNIQUE DUAL INDEX UMI ADAPTORS. 4
# NEBNext Ultra II Directional RNA Protocol Selection Guide 
Use the following chart to determine the most suitable protocol in this manual. Every Section in this manual contains a different protocol based on the starting material. More detailed information is available at the beginning of each Section. Please read the "RNA Sample Recommendations" and "Input Amount" sections in their entirety before starting the protocol. 
Figure 2. NEBNext Ultra II Directional RNA Protocol Selection Guide. 
# Overview 
The NEBNext Ultra II Directional RNA Library Prep Kit for Illumina contains the enzymes and buffers required to convert a broad range of input amounts of RNA into high quality directional (strand-specific) libraries for next-generation sequencing on the Illumina platform. The fast, user-friendly workflow has minimal hands-on time and is compatible with poly(A) mRNA enrichment and rRNA depletion methods. 
Each kit component must pass rigorous quality control standards, and for each new lot the entire set of reagents is functionally validated together by construction and sequencing of an indexed transcriptome library on the Illumina sequencing platform. 
Where larger volumes, customized or bulk packaging are required, we encourage consultation with the Customized Solutions team at NEB. Please complete the NEB Custom Contact Form at  www.neb.com/CustomContactForm  to learn more. 5
# Section 1A Protocol for use with Non -Indexed adaptor, NEBNext Poly(A) mRNA Magnetic Isolation Module (NEB #E7490) (Express Protocol) and NEBNext Ultra II Directional RNA Library Prep Kit for Illumina (NEB #E7760, #E7765) 
Symbols 
This caution sign signifies a step in the protocol that has two paths leading to the same end point but is dependent on a user variable, like the type of RNA input. 
This is a point where you can safely stop the protocol and store the samples prior to proceeding to the next step in the protocol. 
# •
Colored bullets indicate the cap color of the reagent to be added. 
The protocol has been optimized using high quality Universal Human Reference Total RNA. 
RNA Sample Requirements 
RNA Integrity: 
Assess the quality of the Input RNA by running the RNA sample on an Agilent Bioanalyzer ® RNA 6000 Nano/Pico Chip. For PolyA mRNA enrichment, high quality RNA with a RIN score > 7 is required. 
RNA Sample Requirements: 
The RNA sample should be free of salts (e.g., Mg 2+ , or guanidinium salts, divalent cation chelating agents (e.g., EDTA or EGTA) or organics (e.g., phenol or ethanol). RNA must be free of DNA. gDNA is a common contaminant from RNA preps. It may be carried over from the interphase of organic extractions or when the silica matrix of solid phase RNA purification methods is overloaded. If the total RNA sample may contain gDNA contamination, treat the sample with DNase I to remove all traces of DNA (DNase is not provided in this kit). After treatment with DNase I the enzyme should be removed from the sample. Any residual activity of the DNase I may degrade the oligos necessary for the enrichment. DNase I can be removed from the extraction using phenol/chloroform extraction and ethanol precipitation. 
Input Amount Requirements 
10 ng –1 μg DNA-free total RNA quantified by Qubit ® Fluorometer and quality checked by Bioanalyzer. 
The protocol is optimized for approximately 200 bp RNA inserts. To generate libraries with longer RNA insert sizes, refer to Appendix A 
(Section 6) for recommended fragmentation times and size selection conditions. 
Keep all the buffers on ice, unless otherwise indicated. 
1A.1. Preparation of First Strand Reaction Buffer and Random Primer Mix 
1A.1.1. Prepare the First Strand Synthesis Reaction Buffer and Random Primer Mix in a nuclease-free microcentrifuge tube as follows: 
COMPONENT  VOLUME 
# • (lilac) NEBNext First Strand Synthesis Reaction Buffer  8 μl 
# • (lilac) Random Primers  2 μl 
Nuclease-free Water  10 μl 
Total Volume  20 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
You can prepare the first strand synthesis reaction buffer later in the protocol, but it is important that it is ready before the elution in Step 1 A.2.26. T he beads should not be allowed to dry out. 6
1A.1.2. Mix thoroughly by pipetting up and down 10 times and proceed directly to mRNA Isolation. 
Note: Keep the mix on ice until mRNA is purified. It will be used in Step  1A.2.26. and 1A.2.29. 
1A.2. mRNA Isolation, Fragmentation and Priming Starting with Total RNA 
1A.2.1. Dilute the total RNA with nuclease-free water to a final volume of 50 μl in a nuclease -free 0.2 ml PCR tube and keep on ice. 
1A.2.2. Add 20 μl of NEBNext Oligo d(T)25 beads per reaction to a 1.5 ml tube. If preparing multiple libraries, beads for up to 24 samples can be added to a single 1.5 ml tube for subsequent washes (use magnet NEB #S1506 for 1.5 ml tubes). The purpose of this step is to bring the beads from the storage buffer into the binding buffer. The NEBNext RNA Binding Buffer (2X) does not have to be diluted for this step. 
1A.2.3. Place the tube on the magnetic rack at room temperature for 2 minutes or until the solution is clear. 
1A.2.4. Remove and discard all of the supernatant from the tube. Take care not to disturb the beads. 
1A.2.5. Remove the tube from the magnetic rack. 
1A.2.6. Add 50 μl NEBNext RNA Binding Buffer (2X) to the beads and wash by pipetting up and down 6 times. If preparing multiple 
libraries, add 50 μl RNA Binding Buffer per sample. The Binding Buffer does not have to be diluted. 
1A.2.7. Place the tube on the magnet and incubate at room temperature until the solution is clear (about 2 minutes). 
1A.2.8. Remove and discard the supernatant from the tube. Take care not to disturb the beads. 
1A.2.9. Remove the tube from the magnet and add 50 μl NEBNext RNA Binding Buffer (2X) to the beads and mix by pipetting up and 
down until beads are homogeneous. If preparing multiple libraries, add 50 μl RNA Binding Buffer per sample. The Binding Buffer does not have to be diluted. 
1A.2.10. Add 50 μl beads to each RNA sample from Step 1A.2.1. Mix thoroughly by pipetting up and down 6 times. The first binding step removes most of the non-target RNA. 
1A.2.11. Heat the sample to denature the RNA and to facilitate binding of the poly(A) RNA to the beads. Place in a thermal cycler, with 
the heated lid set to ≥ 90°C, and run the following program: 
2 minutes at 80°C 
5 minutes at 25°C 
Hold at 25°C 
1A.2.12. Remove tubes from the thermal cycler when the temperature reaches hold at 25°C. 
1A.2.13. Place the tubes on the magnetic rack at room temperature for 2 minutes or until the solution is clear to separate the poly(A) RNA bound to the beads from the solution. 
1A.2.14. Remove and discard all of the supernatant. Take care not to disturb the beads. Do not remove the tubes from the magnetic rack. 
1A.2.15. While still on the magnet rinse the beads by gently adding 200 μl of NEBNext Wash Buffer to the tubes to remove unbound RNA. 
1A.2.16. Remove and discard all of the supernatant from each tube. Take care not to disturb the beads. 
1A.2.17. Remove the tubes from the magnetic rack. 
1A.2.18. Add the following to each tube containing mRNA bound beads to allow the RNA to re-bind to the same bead. Mix thoroughly by gently pipetting up and down 6 times. 
COMPONENT  VOLUME PER ONE LIBRARY 
NEBNext Tris Buffer  50 μl 
NEBNext RNA Binding Buffer (2X)  50 μl 
Total Volume  100 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
1A.2.19. Place the tubes in a thermal cycler, with the heated lid set to ≥ 90°C, and run the following program: 
2 minutes at 80°C 
5 minutes at 25°C 
Hold at 25°C 7
1A.2.20. Remove the tubes from the thermal cycler when the temperature reaches hold at 25°C. 
1A.2.21. Place the tubes on the magnetic stand at room temperature for 2 minutes or until the solution is clear. 
1A.2.22. Remove and discard all of the supernatant from each tube. Take care not to disturb the beads. Do not remove the tubes from the magnetic rack. 
1A.2.23. While still on the magnet, rinse the beads by gently adding 200 μl of NEBNext Wash Buffer to the tubes to remove unbound RNA. 
1A.2.24. Remove and discard all of the supernatant from the tubes. Take care to remove all of the NEBNext Wash Buffer and do not disturb the beads that contain the mRNA. 
Note: It is important to remove all of the supernatant to successfully use the RNA in downstream steps. Spin down the tube. Place the tube on the magnetic rack and with a 10 μl tip remove all of the NEBNext Wash Buffer. (Caution: Do not disturb the beads that contain mRNA). Avoid letting the beads dry out before adding elution buffer. 
1A.2.25. Remove the tube from the magnetic rack. 
Note: The next step provides a fragmentation incubation time resulting in an RNA insert size of ~ 200 nt. For RNA insert sizes > 200 nt, refer to Section 6 (Appendix A) for recommended fragmentation times in Step 1A.2.27. 
1A.2.26. To elute the mRNA from the beads and fragment, add 11.5 μl of the First Strand Synthesis Reaction Buffer and Random Primer Mix prepared in Step 1A.1.2., pipette up and down 6 times to resuspend the beads. 
1A.2.27. Incubate the sample in a thermal cycler with the heated lid set at 105°C as follows: 
15 minutes at 94°C 
Hold at 4°C *
* Immediately transfer the tube to ice for 1 minute as soon as it is cool enough to handle (~65°C) 
1A.2.28. Quickly spin down the tube in a microcentrifuge to collect the liquid from the sides of the tube and place on the magnet right away until the solution is clear (about 1 –2 minutes). 
1A.2.29. Collect the fragmented mRNA by transferring 10 μl of the supernatant to a nuclease-free 0.2 ml PCR tube. 
Note 1: If the supernatant volume recovered is less than 10 μl for any reason, bring the volume up to 10 μl by adding the 
First Strand Synthesis Reaction Buffer and Random Primer Mix prepared in Step 1A.1.2. and continue with the protocol. 
Note 2: Avoid transferring any of the magnetic beads. 
1A.2.30. Place the tube on ice and proceed directly to First Strand cDNA Synthesis. 
1A.3. First Strand cDNA Synthesis 
1A.3.1. Assemble the first strand cDNA synthesis reaction on ice by adding the following components into fragmented and primed RNA from Step 1A.2.30. 
FIRST STRAND cDNA SYNTHESIS REACTION  VOLUME 
Fragmented and primed RNA (Step 1A.2.30.)  10 μl 
# • (brown) NEBNext Strand Specificity Reagent  8 μl 
# • (lilac) NEBNext First Strand Synthesis Enzyme Mix  2 μl 
Total Volume  20 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
1A.3.2. Mix thoroughly by pipetting up and down at least 10 times. 8
1A.3.3. Incubate the sample in a preheated thermal cycler with the heated lid set at ≥ 80°C as follows: 
Note: If you are following recommendations in Appendix A, for longer RNA fragments (creating inserts > 200 bases), increase the incubation at 42°C from 15 minutes to 50 minutes at Step 2. 
Step 1: 10 minutes at 25°C 
Step 2: 15 minutes at 42°C 
Step 3: 15 minutes at 70°C 
Step 4: Hold at 4°C 
Immediately, perform Second Strand cDNA Synthesis. 
1A.4. Second Strand cDNA Synthesis 
1A.4.1. Assemble the second strand cDNA synthesis reaction on ice by adding the following components into the first strand synthesis reaction product from Step 1A.3.3. 
SECOND STRAND SYNTHESIS REACTION  VOLUME 
First-Strand Synthesis Product (Step 1A.3.3.)  20 μl 
# • (orange) NEBNext Second Strand Synthesis Reaction Buffer with dUTP Mix  8 μl 
# • (orange) NEBNext Second Strand Synthesis Enzyme Mix  4 μl 
Nuclease-free Water  48 μl 
Total Volume  80 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
1A.4.2. Keeping the tube on ice, mix thoroughly by pipetting the reaction up and down at least 10 times. 
1A.4.3. Incubate in a thermal cycler for 1 hour at 16°C with the heated lid set at ≤ 40°C (or off). Proceed to Purification of Double-stranded cDNA. 
1A.5. Purification of Double-stranded cDNA using SPRIselect Beads or NEBNext Sample Purification Beads 
1A.5.1. Vortex SPRIselect Beads or NEBNext Sample Purification Beads to resuspend. 
1A.5.2. Add 144 μl (1.8X) of resuspended beads to the second strand synthesis reaction (~80 μl). Mix well on a vortex mixer or by 
pipetting up and down at least 10 times. 
1A.5.3. Incubate for at least 5 minutes at room temperature. 
1A.5.4. Briefly spin the tube in a microcentrifuge to collect any sample from the sides of the tube. Place the tube on a magnetic rack to separate beads from the supernatant. After the solution is clear (about 5 minutes), carefully remove and discard the supernatant. Be careful not to disturb the beads, which contain DNA. (Caution: do not discard beads). 
1A.5.5. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic stand. Incubate at room temperature for 30 seconds, and then carefully remove and discard the supernatant. 
1A.5.6. Repeat Step 1A.5.5. once for a total of 2 washing steps. 
1A.5.7. Air dry the beads for up to 5 minutes while the tube is on the magnetic rack with the lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
1A.5.8. Remove the tube from the magnet. Elute the DNA target from the beads by adding 53 μl 0.1X TE Buffer (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down 10 times. Briefly spin the tube and incubate for 2 minutes at room temperature. Place the tube on the magnetic rack until the solution is clear (about 2 minutes). 
1A.5.9. Remove 50 μl of the supernatant and transfer to a clean nuclease-free PCR tube. 
Note: If you need to stop at this point in the protocol, samples can be stored at –20°C. 9
1A.6. End Prep of cDNA Library 
1A.6.1. Assemble the end prep reaction on ice by adding the following components to second strand synthesis product from Step 1A.5.9. 
END PREP REACTION  VOLUME 
Second Strand cDNA Synthesis Product (Step 1A.5.9.)  50 μl 
# • (green) NEBNext Ultra II End Prep Reaction Buffer  7 μl 
# • (green) NEBNext Ultra II End Prep Enzyme Mix  3 μl 
Total Volume  60 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
1A.6.2. Set a 100 μl or 200 μl pipette to 50 μl and then pipette the entire volume up and down at least 10 times to mix thoroughly. 
Perform a quick spin to collect all liquid from the sides of the tube. 
Note: It is important to mix well. The presence of a small amount of bubbles will not interfere with performance. 
1A.6.3. Incubate the sample in a thermal cycler with the heated lid set at ≥ 75°C as follows: 
30 minutes at 20°C 
30 minutes at 65°C 
Hold at 4°C 
Proceed immediately to Adaptor Ligation. 
1A.7. Adaptor Ligation 
1A.7.1. Dilute the • (red) NEBNext Adaptor* prior to setting up the ligation reaction in ice-cold Adaptor Dilution Buffer and keep the diluted adaptor on ice. 
TOTAL RNA INPUT  DILUTION REQUIRED 
1,000 –250 ng  5-fold dilution in Adaptor Dilution Buffer 
249 –100 ng  25-fold dilution in Adaptor Dilution Buffer 
99 –10 ng  100-fold dilution in Adaptor Dilution Buffer  
> *The NEBNext adaptor is provided in NEBNext oligos kit. NEB has several oligo kit options, which are supplied separately from the library prep kit. Please see www.neb.com/oligos for additional information.
1A.7.2. Assemble the ligation reaction on ice by adding the following components, in the order given, to the end prep reaction product from Step 1A.6.3. 
LIGATION REACTION  VOLUME 
End Prepped DNA (Step 1A.6.3.)  60 μl 
Diluted Adaptor (Step 1A.7.1.)  2.5 μl 
# • (red) NEBNext Ligation Enhancer  1 μl 
# • (red) NEBNext Ultra II Ligation Master Mix  30 μl 
Total Volume  93.5 μl 
The Ligation Master Mix and Ligation Enhancer can be mixed ahead of time and is stable for at least 8 hours at 4°C. 
Do not premix the Ligation Master Mix, Ligation Enhancer and adaptor prior to use in the Adaptor Ligation Step. 
1A.7.3. Set a 100 μl or 200 μl pipette to 80 μl and then pipette the entire volume up and down at least 10 times to mix thoroughly. 
Perform a quick spin to collect all liquid from the sides of the tube. 
Caution: The NEBNext Ultra II Ligation Master Mix is very viscous. Care should be taken to ensure adequate mixing of the ligation reaction, as incomplete mixing will result in reduced ligation efficiency. The presence of a small amount of bubbles will not interfere with performance. 10 
1A.7.4. Incubate 15 minutes at 20°C in a thermal cycler with the heated lid off. 
1A.7.5. Add 3 μl (blue or red) USER Enzyme to the ligation mixture from Step 1A.7.4. , resulting in total volume of 96.5 μl. 
1A.7.6. Mix well and incubate at 37°C for 15 minutes with the heated lid set to ≥ 45°C , hold at 4°C. Proceed immediately to Purification of the Ligation Reaction. 
1A.8. Purification of the Ligation Reaction Using SPRIselect Beads or NEBNext Sample Purification Beads 
Note: If you are selecting for larger insert size libraries (> 200 nt) follow the size selection recommendations in Appendix A, Section 6. 
1A.8.1. Add 87 μl (0.9X) resuspended SPRIselect Beads or NEBNext Sample Purification Beads and mix well on a vortex mixer or by pipetting up and down at least 10 times. 
1A.8.2. Incubate for 10 minutes at room temperature. 
1A.8.3. Quickly spin the tube in a microcentrifuge and place the tube on an appropriate magnetic rack to separate beads from the supernatant. After the solution is clear (~ 5 minutes), discard the supernatant that contain unwanted fragments (Caution: do not discard beads) .
1A.8.4. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic rack. Incubate at room temperature for 30 seconds, and then carefully remove and discard the supernatant. 
1A.8.5. Repeat Step 1A.8.4. once for a total of 2 washing steps. 
1A.8.6. Briefly spin the tube and put the tube back in the magnetic rack. 
1A.8.7. Completely remove the residual ethanol and air dry beads for up to 5 minutes while the tube is on the magnetic rack with the lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
1A.8.8. Remove the tube from the magnet. Elute DNA target from the beads by adding 17 μl 0.1X TE (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down. Quickly spin the tube and incubate for 2 minutes at room temperature. Put the tube in the magnetic rack until the solution is clear (about 2 minutes). 
1A.8.9. Without disturbing the bead pellet, transfer 15 μl of the supernatant to a clean PCR tube and proceed to PCR enrichment. 
Note: If you need to stop at this point in the protocol samples can be stored at –20°C. 11 
1A.9. PCR Enrichment of Adaptor Ligated DNA 
Use Option A for any NEBNext oligos kit where index primers are supplied in tubes. These kits have the forward and reverse primers supplied in separate tubes. 
Use Option B for any NEBNext oligos kit where index primers are supplied in a 96-well plate format. These kits have the forward and reverse (i7 and i5) primers combined. Primers are supplied at 10 μM combined (5 μM each). 
1A.9.1. Set up the PCR reaction as described below based on the type of oligos (PCR primers) used. 
1A.9.1A. Forward and Reverse Primers Separate 
COMPONENT  VOLUME PER ONE LIBRARY 
Adaptor Ligated DNA (Step 1A.8.9.)  15 μl 
# • (blue) NEBNext Ultra II Q5 Master Mix  25 μl 
Index (X) Primer/i7 Primer *, **  5 μl 
Universal PCR Primer/i5 Primer *,**  5 μl 
Total Volume  50 μl   
> *NEBNext Oligos must be purchased separately from the library prep kit. Refer to the corresponding NEBNext Oligo kit manual
> for determining valid barcode combinations.
> ** Use only one i7 primer/ index primer per sample. Use only one i5 primer (or the universal primer for single index kits) per sample
1A.9.1B. Forward and Reverse Primers Combined 
COMPONENT  VOLUME PER ONE LIBRARY 
Adaptor Ligated DNA (Step 1A.8.9.)  15 μl 
# • (blue) NEBNext Ultra II Q5 Master Mix  25 μl 
Index Primer Mix * 10 μl 
Total Volume  50 μl  
> *NEBNext Oligos must be purchased separately from the library prep kit. Refer to the corresponding NEBNext Oligo kit manual for determining valid barcode combinations.
1A.9.2. Mix well by gently pipetting up and down 10 times. Quickly spin the tube in a microcentrifuge. 
1A.9.3. Place the tube on a thermal cycler with the heated lid set to 105°C and perform PCR amplification using the following PCR cycling conditions (refer to Table 1.9.3A and Table 1.9.3B): 
Table 1A.9.3A: 
CYCLE STEP  TEMP  TIME  CYCLES 
Initial Denaturation  98°C  30 seconds  1
Denaturation  98°C  10 seconds  8–16 *, ** 
Annealing/Extension  65°C  75 seconds 
Final Extension  65°C  5 minutes  1
Hold  4°C  ∞  
> *The number of PCR cycles should be adjusted based on RNA input (Table 1A.9.3B).
> ** It is important to limit the number of PCR cycles to avoid overamplification. If overamplification occurs, a second peak ~ 1,000 bp will appear on the Bioanalyzer trace (See Figure 7.2 in the Troubleshooting Guide, Section 7).
# 12 
Table 1A.9.3B: Recommended PCR cycles based on total RNA input amount: 
TOTAL RNA INPUT  RECOMMENDED PCR CYCLES 
1,000 ng  8–9
100 ng  12 –13 
10 ng  15 –16 
Note: PCR cycles are recommended based on high quality Universal Human Reference 
Total RNA. It may require optimization based on the sample quality to prevent PCR over-amplification. 
1A.10. Purification of the PCR Reaction using SPRIselect Beads or NEBNext Sample Purification Beads 
1A.10.1. Vortex SPRIselect Beads or NEBNext Sample Purification Beads to resuspend. 
1A.10.2. Add 45 μl (0.9X) of resuspended beads to the PCR reaction (~ 50 μl). Mix well on a vortex mixer or by pipetting up and down 
at least 10 times. 
1A.10.3. Incubate for up to 5 minutes at room temperature. 
1A.10.4. Quickly spin the tube in a microcentrifuge and place the tube on an appropriate magnetic rack to separate beads from the supernatant. After the solution is clear (about 5 minutes), carefully remove and discard the supernatant. Be careful not to disturb the beads that contain DNA targets. 
1A.10.5. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic rack. Incubate at room temperature for 30 seconds, and then carefully remove and discard the supernatant. 
1A.10.6. Repeat Step 1A.10.5. once for a total of 2 washing steps. 
1A.10.7. Air dry the beads for up to 5 minutes while the tube is on the magnetic rack with the lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of the DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
1A.10.8. Remove the tube from the magnetic rack. Elute the DNA target from the beads by adding 23 μl 0.1X TE (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down 10 times. Quickly spin the tube in a microcentrifuge and incubate for 
2 minutes at room temperature. Place the tube in the magnetic rack until the solution is clear (about 2 minutes). 
1A.10.9. Transfer 20 μl of the supernatant to a clean PCR tube. 
Note: At this point in the protocol samples can be stored at –20°C. 13 
1A.11. Assess Library Quality on an Agilent Bioanalyzer DNA Chip 
1A.11.1. Run 1 μl library on a DNA 1000 chip. If the library yield is too low to quantify on this chip, please run the samples on a DNA High Sensitivity chip. A dilution may be necessary for running on a Bioanalyzer High Sensitivity DNA chip. 
1A.11.2. Check that the electropherogram shows a narrow distribution with a peak size approximately 300 bp. 
Note: If a peak at ~ 80 bp (primers) or 128 bp (adaptor-dimer) is visible in the Bioanalyzer traces, bring up the sample volume (from Step 1A.10.9. ) to 50 μl with 0.1X TE buffer and repeat the SPRIselect Bead or NEBNext Sample Purification Bead Cleanup Step (Section 1A.10.). Adaptor dimer peak range is derived from values observed on BioAnalyzer. Peaks may appear shifted on other library analysis instruments such as TapeStation or Fragment Analyzer. 
Figure 1A.11.2. Example of RNA library size distribution on a Bioanalyzer. 14 
# Section 1B Protocol for use with Non -Indexed adaptor, NEBNext Poly(A) mRNA Magnetic Isolation Module (NEB #E7490) (Standard Protocol) and NEBNext Ultra II Directional RNA Library Prep Kit for Illumina (NEB #E7760, #E7765) 
Symbols 
This caution sign signifies a step in the protocol that has two paths leading to the same end point but is dependent on a user variable, like the type of RNA input. 
This is a point where you can safely stop the protocol and store the samples prior to proceeding to the next step in the protocol. 
# •
Colored bullets indicate the cap color of the reagent to be added. 
The protocol has been optimized using high quality Universal Human Reference Total RNA. 
RNA Sample Requirements 
RNA Integrity: 
Assess the quality of the Input RNA by running the RNA sample on an Agilent Bioanalyzer ® RNA 6000 Nano/Pico Chip. For Poly(A) mRNA enrichment, high quality RNA with a RIN score > 7 is required. 
RNA Sample Requirements: 
The RNA sample should be free of salts (e.g., Mg 2+ , or guanidinium salts, divalent cation chelating agents (e.g., EDTA or EGTA) or organics (e.g., phenol or ethanol). RNA must be free of DNA. gDNA is a common contaminant from RNA preps. It may be carried over from the interphase of organic extractions or when the silica matrix of solid phase RNA purification methods is overloaded. If the total RNA sample may contain gDNA contamination, treat the sample with DNase I to remove all traces of DNA (DNase is not provided in this kit). After treatment with DNase I the enzyme should be removed from the sample. Any residual activity of the DNase I may degrade the oligos necessary for the enrichment. DNase I can be removed from the extraction using phenol/chloroform extraction and ethanol precipitation. 
Input Amount Requirements 
10 ng –1 μg DNA-free total RNA quantified by Qubit ® Fluorometer and quality checked by Bioanalyzer. The protocol is optimized for approximately 200 bp RNA inserts. To generate libraries with longer RNA insert sizes, refer to Appendix A (Section 6) for recommended fragmentation times and size selection conditions. 
Keep all the buffers on ice, unless otherwise indicated. 
1B.1. Preparation of First Strand Reaction Buffer and Random Primer Mix 
1B.1.1. Prepare the First Strand Synthesis Reaction Buffer and Random Primer Mix in a nuclease-free microcentrifuge tube as follows: 
COMPONENT  VOLUME 
# • (lilac) NEBNext First Strand Synthesis Reaction Buffer  8 μl 
# • (lilac) Random Primers  2 μl 
Nuclease-free Water  10 μl 
Total Volume  20 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
You can prepare the first strand synthesis reaction buffer later in the protocol, but it is important that it is ready before the elution in Step 1B.2.36. The beads should not be allowed to dry out. 15 
1B.1.2. Mix thoroughly by pipetting up and down 10 times and proceed directly to mRNA Isolation. 
Note: Keep the mix on ice until mRNA is purified. It will be used in Step 1B.2.36. and 1B.2.39. 
1B.2. mRNA Isolation, Fragmentation and Priming Starting with Total RNA 
1B.2.1. Dilute the total RNA with nuclease-free water to a final volume of 50 μl in a nuclease-free 0.2 ml PCR tube and keep on ice. 
1B.2.2. To wash the Oligo dT Beads, add the following to a 1.5 ml nuclease-free tube. If preparing multiple libraries, beads for up to 10 samples can be added to a single 1.5 ml tube for subsequent washes (use magnet NEB #S1506 for 1.5 ml tubes). The purpose of this step is to bring the beads from the storage buffer into the binding buffer. The 2X Binding Buffer does not have to be diluted for this step. 
COMPONENT  VOLUME PER ONE LIBRARY 
Oligo dT Beads d(T) 25  20 μl 
• RNA Binding Buffer (2X)  100 μl 
Total Volume  120 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
1B.2.3. Wash the beads by pipetting up and down 6 times. 
1B.2.4. Place the tube on the magnet and incubate at room temperature until the solution is clear (about 2 minutes). 
1B.2.5. Remove and discard all of the supernatant from the tube. Take care not to disturb the beads. 
1B.2.6. Remove the tube from the magnetic rack. 
1B.2.7. Add 100 μl RNA Binding Buffer (2X) to the beads and wash by pipetting up and down 6 times. If preparing multiple libraries, add 100 μl RNA Binding Buffer (2X) per sample. The Binding Buffer does not have to be diluted. 
1B.2.8. Place the tubes on the magnet and incubate at room temperature until the solution is clear (about 2 minutes). 
1B.2.9. Remove and discard the supernatant from the tube. Take care not to disturb the beads. 
1B.2.10. Remove the tube from the magnet and add 5 0 μl RNA Binding Buffer (2X) to the beads and mix by pipetting up and down until beads 
are homogenous. If preparing multiple libraries, add 50 μl RNA Binding Buffer (2X) per sample. 
1B.2.11. Add 50 μl beads to each RNA sample from Step 1B.2.1. Mix thoroughly by pipetting up and down 6 times. This first binding step removes most of the non target RNA. 
1B.2.12. Place the tube in a thermal cycler and close the lid. Heat the sample at 65°C for 5 minutes and cool to 4°C with the heated lid 
set at ≥ 75°C to denature the RNA and facilitate binding of the mRNA to the beads. 
1B.2.13. Remove the tube from the thermal cycler when the temperature reaches 4°C .
1B.2.14. Mix thoroughly by pipetting up and down 6 times. Place the tube on the bench and incubate at room temperature for 5 minutes to allow the mRNA to bind to the beads. 
1B.2.15. Place the tube on the magnetic rack at room temperature until the solution is clear (about 2 minutes). 
1B.2.16. Remove and discard all of the supernatant. Take care not to disturb the beads. 
1B.2.17. Remove the tube from the magnetic rack. 
1B.2.18. Wash the beads by adding 200 μl of Wash Buffer to the tube to remove unbound RNA. Gently pipette the entire volume up and down 6 times to mix thoroughly. 
1B.2.19. Place the tube on the magnetic rack at room temperature until the solution is clear (about 2 minutes). 
1B.2.20. Remove and discard all of the supernatant from the tube. Take care not to disturb the beads. 
1B.2.21. Remove the tube from the magnetic rack. 
1B.2.22. Repeat steps 1B.2.18. –1B.2.21. 
1B.2.23. Add 50 μl of Tris Buffer (provided in NEB #E7490 kit) to each tube. Gently pipette up and down 6 times to mix thoroughly. 
1B.2.24. Place the tube on the thermal cycler. Close the lid and heat the samples at 80°C for 2 minutes, then cool to 25°C with the 
heated lid set at ≥ 90°C to do the first elution of the mRNA from the beads. 
1B.2.25. Remove the tube from the thermal cycler when the temperature reaches 25°C. 16 
1B.2.26. Add 50 μl of RNA Binding Buffer (2X) to the sample to allow the mRNA to re-bind to the beads. Mix thoroughly by gently pipetting up and down 6 times. 
1B.2.27. Incubate the tube at room temperature for 5 minutes .
1B.2.28. Place the tube on the magnetic rack at room temperature until the solution is clear (about 2 minutes). 
1B.2.29. Remove and discard the supernatant from the tube. Take care not to disturb the beads. 
1B.2.30. Remove the tube from the magnetic rack. 
1B.2.31. Wash the beads by adding 200 μl of Wash Buffer. Gently pipette the entire volume up and down 6 times to mix thoroughly. 
1B.2.32. Spin down the tube briefly to collect the liquid from the wall and lid of the tube. 
Note: It is important to spin down the tube to prevent carryover of the Wash Buffer in subsequent steps. 
1B.2.33. Place the tube on the magnet at room temperature until the solution is clear (about 2 minutes). 
1B.2.34. Remove and discard all of the supernatant from the tube. Take care not to disturb the beads that contains the mRNA. 
Note: It is important to remove all of the supernatant to successfully fragment the mRNA in the subsequent steps. Spin down the tube. Place the tube on the magnetic rack and with a 10 μl tip, remove all of the wash buffer. (Caution: Do not disturb beads that contain the mRNA). Avoid letting the beads dry out before adding elution buffer. 
1B.2.35. Remove the tube from the magnetic rack. 
Note: The next step provides a fragmentation incubation time resulting in an RNA insert size of ~ 200 nt. For RNA insert sizes > 200 nt, refer to Section 6 (Appendix A) for recommended fragmentation times in Step 1B.2.37. 
1B.2.36. To elute the mRNA from the beads and fragment, add 11.5 μl of the First Strand Synthesis Reaction Buffer and Random Primer Mix prepared in Step 1B.1.2., pipette up and down 6 times to resuspend the beads. 
1B.2.37. Incubate the sample in a thermal cycler with the heated lid set at 105°C as follows: 
15 minutes at 94°C 
Hold at 4°C *
* Immediately transfer the tube to ice for 1 minute as soon as it is cool enough to handle (~65°C) 
1B.2.38. Quickly spin down the tube in a microcentrifuge to collect the liquid from the sides of the tube and place on the magnet right away until the solution is clear (about 1 –2 minutes). 
1B.2.39. Collect the fragmented mRNA by transferring 10 μl of the supernatant to a nuclease-free 0.2 ml PCR tube. 
Note 1: If the supernatant volume recovered is less than 10 μl for any reason, bring the volume up to 10 μl by adding the 
First Strand Synthesis Reaction Buffer and Random Primer Mix prepared in Step 1B.1.2. and continue with the protocol. 
Note 2: Avoid transferring any of the magnetic beads. 
1B.2.40. Place the tube on ice and proceed directly to First Strand cDNA Synthesis. 
1B.3. First Strand cDNA Synthesis 
1B.3.1. Assemble the first strand cDNA synthesis reaction on ice by adding the following components into fragmented and primed RNA from Step 1B.2.40. 
FIRST STRAND cDNA SYNTHESIS REACTION  VOLUME 
Fragmented and primed RNA (Step 1B.2.40.)  10 μl 
# • (brown) NEBNext Strand Specificity Reagent  8 μl 
# • (lilac) NEBNext First Strand Synthesis Enzyme Mix  2 μl 
Total Volume  20 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
1B.3.2. Mix thoroughly by pipetting up and down at least 10 times. 
1B.3.3. Incubate the sample in a preheated thermal cycler with the heated lid set at ≥ 80°C as follows: 17 
Note: If you are following recommendations in Appendix A, for longer RNA fragments (creating inserts > 200 bases), increase the incubation at 42°C from 15 minutes to 50 minutes at Step 2. 
Step 1: 10 minutes at 25°C 
Step 2: 15 minutes at 42°C 
Step 3: 15 minutes at 70°C 
Step 4: Hold at 4°C 
Immediately, perform Second Strand cDNA Synthesis. 
1B.4. Second Strand cDNA Synthesis 
1B.4.1. Assemble the second strand cDNA synthesis reaction on ice by adding the following components into the first strand synthesis reaction product from Step 1B.3.3. 
SECOND STRAND SYNTHESIS REACTION  VOLUME 
First-Strand Synthesis Product (Step 1B.3.3.)  20 μl 
# • (orange) NEBNext Second Strand Synthesis Reaction Buffer with dUTP Mix  8 μl 
# • (orange) NEBNext Second Strand Synthesis Enzyme Mix  4 μl 
Nuclease-free Water  48 μl 
Total Volume  80 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
1B.4.2. Keeping the tube on ice, mix thoroughly by pipetting the reaction up and down at least 10 times. 
1B.4.3. Incubate in a thermal cycler for 1 hour at 16°C with the heated lid set at ≤ 40°C (or off). Proceed to Purification of Double-stranded cDNA. 
1B.5. Purification of Double-stranded cDNA using SPRIselect Beads or NEBNext Sample Purification Beads 
1B.5.1. Vortex SPRIselect Beads or NEBNext Sample Purification Beads to resuspend. 
1B.5.2. Add 144 μl (1.8X) of resuspended beads to the second strand synthesis reaction (~80 μl). Mix well on a vortex mixer or by 
pipetting up and down at least 10 times. 
1B.5.3. Incubate for at least 5 minutes at room temperature. 
1B.5.4. Briefly spin the tube in a microcentrifuge to collect any sample from the sides of the tube. Place the tube on a magnetic rack to separate beads from the supernatant. After the solution is clear (about 5 minutes), carefully remove and discard the supernatant. Be careful not to disturb the beads, which contain DNA. (Caution: do not discard beads). 
1B.5.5. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic stand. Incubate at room temperature for 30 seconds, and then carefully remove and discard the supernatant. 
1B.5.6. Repeat Step 1B.5.5. once for a total of 2 washing steps. 
1B.5.7. Air dry the beads for up to 5 minutes while the tube is on the magnetic rack with the lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
1B.5.8. Remove the tube from the magnet. Elute the DNA target from the beads by adding 53 μl 0.1X TE Buffer (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down 10 times. Briefly spin the tube and incubate for 2 minutes at room temperature. Place the tube on the magnetic rack until the solution is clear (about 2 minutes). 
1B.5.9. Remove 50 μl of the supernatant and transfer to a clean nuclease-free PCR tube. 
Note: If you need to stop at this point in the protocol, samples can be stored at –20°C. 18 
1B.6. End Prep of cDNA Library 
1B.6.1. Assemble the end prep reaction on ice by adding the following components to second strand synthesis product from Step 1B.5.9. 
END PREP REACTION  VOLUME 
Second Strand cDNA Synthesis Product (Step 1B.5.9.)  50 μl 
# • (green) NEBNext Ultra II End Prep Reaction Buffer  7 μl 
# • (green) NEBNext Ultra II End Prep Enzyme Mix  3 μl 
Total Volume  60 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
1B.6.2. Set a 100 μl or 200 μl pipette to 50 μl and then pipette the entire volume up and down at least 10 times to mix thoroughly. 
Perform a quick spin to collect all liquid from the sides of the tube. 
Note: It is important to mix well. The presence of a small amount of bubbles will not interfere with performance. 
1B.6.3. Incubate the sample in a thermal cycler with the heated lid set at ≥ 75°C as follows: 
30 minutes at 20°C 
30 minutes at 65°C 
Hold at 4°C 
Proceed immediately to Adaptor Ligation. 
1B.7. Adaptor Ligation 
1B.7.1. Dilute the  • (red) NEBNext Adaptor* prior to setting up the ligation reaction in ice-cold Adaptor Dilution Buffer and keep the diluted adaptor on ice. 
TOTAL RNA INPUT  DILUTION REQUIRED 
1,000 –250 ng  5-fold dilution in Adaptor Dilution Buffer 
249 –100 ng  25-fold dilution in Adaptor Dilution Buffer 
99 –10 ng  100-fold dilution in Adaptor Dilution Buffer  
> *The NEBNext adaptor is provided in NEBNext oligos kit. NEB has several oligo kit options, which are supplied separately from the library prep kit. Please see www.neb.com/oligos for additional information.
1B.7.2. Assemble the ligation reaction on ice by adding the following components, in the order given, to the end prep reaction product from Step 1B.6.3. 
LIGATION REACTION  VOLUME 
End Prepped DNA (Step 1B.6.3.)  60 μl 
Diluted Adaptor (Step 1B.7.1.)  2.5 μl 
# • (red) NEBNext Ligation Enhancer  1 μl 
# • (red) NEBNext Ultra II Ligation Master Mix  30 μl 
Total Volume  93.5 μl 
The Ligation Master Mix and Ligation Enhancer can be mixed ahead of time and is stable for at least 8 hours at 4°C. Do not premix the Ligation Master Mix, Ligation Enhancer and adaptor prior to use in the Adaptor Ligation Step. 19 
1B.7.3. Set a 100 μl or 200 μl pipette to 80 μl and then pipette the entire volume up and down at least 10 times to mix thoroughly. 
Perform a quick spin to collect all liquid from the sides of the tube. 
Caution: The NEBNext Ultra II Ligation Master Mix is very viscous. Care should be taken to ensure adequate mixing of the ligation reaction, as incomplete mixing will result in reduced ligation efficiency. The presence of a small amount of bubbles will not interfere with performance. 
1B.7.4. Incubate 15 minutes at 20°C in a thermal cycler with the heated lid off. 
1B.7.5 Add 3 μl (blue or red) USER Enzyme to the ligation mixture from Step 1B.7.4. , resulting in total volume of 96.5 μl. 
1B.7.6 Mix well and incubate at 37°C for 15 minutes with the heated lid set to ≥ 45°C , hold at 4°C. Proceed immediately to Purification of the Ligation Reaction. 
1B.8. Purification of the Ligation Reaction Using SPRIselect Beads or NEBNext Sample Purification Beads 
Note: If you are selecting for larger insert size libraries (> 200 nt) follow the size selection recommendations in Appendix A, Section 6. 
1B.8.1. Add 87 μl (0.9X) resuspended SPRIselect Beads or NEBNext Sample Purification Beads and mix well on a vortex mixer or by pipetting up and down at least 10 times. 
1B.8.2. Incubate for 10 minutes at room temperature. 
1B.8.3. Quickly spin the tube in a microcentrifuge and place the tube on an appropriate magnetic rack to separate beads from the supernatant. After the solution is clear (about 5 minutes), discard the supernatant that contain unwanted fragments (Caution: do not discard beads) .
1B.8.4. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic rack. Incubate at room temperature for 30 seconds, and then carefully remove and discard the supernatant. 
1B.8.5. Repeat Step 1B.8.4. once for a total of 2 washing steps. 
1B.8.6. Briefly spin the tube and put the tube back in the magnetic rack. 
1B.8.7. Completely remove the residual ethanol and air dry beads for up to 5 minutes while the tube is on the magnetic rack with the lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
1B.8.8. Remove the tube from the magnet. Elute DNA target from the beads by adding 17 μl 0.1X TE (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down. Quickly spin the tube and incubate for 2 minutes at room temperature. Put the tube in the magnetic rack until the solution is clear (about 2 minutes). 
1B.8.9. Without disturbing the bead pellet, transfer 15 μl of the supernatant to a clean PCR tube and proceed to PCR enrichment. 
Note: If you need to stop at this point in the protocol samples can be stored at –20°C. 
1B.9. PCR Enrichment of Adaptor Ligated DNA 
Use Option A for any NEBNext oligos kit where index primers are supplied in tubes. These kits have the forward and reverse primers supplied in separate tubes. 
Use Option B for any NEBNext oligos kit where index primers are supplied in a 96-well plate format. These kits have the forward and reverse (i7 and i5) primers combined. Primers are supplied at 10 μM combined (5 μM each). 
1B.9.1. Set up the PCR reaction as described below based on the type of oligos (PCR primers) used. 20 
1B.9.1A. Forward and Reverse Primers Separate 
COMPONENT  VOLUME PER ONE LIBRARY 
Adaptor Ligated DNA (Step 1B.8.9.)  15 μl 
# • (blue) NEBNext Ultra II Q5 Master Mix  25 μl 
Index (X) Primer/i7 Primer *, **  5 μl 
Universal PCR Primer/i5 Primer *,**  5 μl 
Total Volume  50 μl 
* NEBNext Oligos must be purchased separately from the library prep kit. Refer to the corresponding NEBNext Oligo kit manual for determining valid barcode combinations. 
** Use only one i7 primer/ index primer per sample. Use only one i5 primer (or the universal primer for single index kits) per sample 
1B.9.1B. Forward and Reverse Primers Combined 
COMPONENT  VOLUME PER ONE LIBRARY 
Adaptor Ligated DNA (Step 1B.8.9.)  15 μl 
# • (blue) NEBNext Ultra II Q5 Master Mix  25 μl 
Index Primer Mix * 10 μl 
Total Volume  50 μl 
* NEBNext Oligos must be purchased separately from the library prep kit. Refer to the corresponding NEBNext Oligo kit manual for determining valid barcode combinations. 
1B.9.2. Mix well by gently pipetting up and down 10 times. Quickly spin the tube in a microcentrifuge. 
1B.9.3. Place the tube on a thermal cycler with the heated lid set to 105°C and perform PCR amplification using the following PCR cycling conditions (refer to Table 1B.9.3A and Table 1B.9.3B): 
Table 1B.9.3A: 
CYCLE STEP  TEMP  TIME  CYCLES 
Initial Denaturation  98°C  30 seconds  1
Denaturation  98°C  10 seconds  8–16 *, ** 
Annealing/Extension  65°C  75 seconds 
Final Extension  65°C  5 minutes  1
Hold  4°C  ∞  
> *The number of PCR cycles should be adjusted based on RNA input (Table 1B.9.3B).
> ** It is important to limit the number of PCR cycles to avoid overamplification. If overamplification occurs, a second peak ~ 1,000 bp will appear on the Bioanalyzer trace (See Figure 7.2 in the Troubleshooting Guide, Section 7).
Table 1B.9.3B: Recommended PCR cycles based on total RNA input amount: 
TOTAL RNA INPUT  RECOMMENDED PCR CYCLES 
1,000 ng  8–9
100 ng  12 –13 
10 ng  15 –16 
Note: PCR cycles are recommended based on high quality Universal Human Reference Total RNA. It may require optimization based on the sample quality to prevent PCR over-amplification. 21 
1B.10. Purification of the PCR Reaction using SPRIselect Beads or NEBNext Sample Purification Beads 
1B.10.1. Vortex SPRIselect Beads or NEBNext Sample Purification Beads to resuspend. 
1B.10.2. Add 45 μl (0.9X) of resuspended beads to the PCR reaction (~ 50 μl). Mix well on a vortex mixer or by pipetting up and down 
at least 10 times. 
1B.10.3. Incubate for up to 5 minutes at room temperature. 
1B.10.4. Quickly spin the tube in a microcentrifuge and place the tube on an appropriate magnetic rack to separate beads from the supernatant. After the solution is clear (about 5 minutes), carefully remove and discard the supernatant. Be careful not to disturb the beads that contain DNA targets. 
1B.10.5. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic rack. Incubate at room temperature for 30 seconds, and then carefully remove and discard the supernatant. 
1B.10.6. Repeat Step 1B.10.5. once for a total of 2 washing steps. 
1B.10.7. Air dry the beads for up to 5 minutes while the tube is on the magnetic rack with the lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of the DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
1B.10.8. Remove the tube from the magnetic rack. Elute the DNA target from the beads by adding 23 μl 0.1X TE (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down 10 times. Quickly spin the tube in a microcentrifuge and incubate for 2 minutes at room temperature. Place the tube in the magnetic rack until the solution is clear (about 2 minutes). 
1B.10.9. Transfer 20 μl of the supernatant to a clean PCR tube. 
Note: At this point in the protocol sample can be stored at –20°C. 
1B.11. Assess Library Quality on an Agilent Bioanalyzer DNA Chip 
1B.11.1. Run 1 μl library on a DNA 1000 chip. If the library yield is too low to quantify on this chip, please run the samples on a DN AHigh Sensitivity chip. A dilution may be necessary for running on a Bioanalyzer High Sensitivity DNA chip. 
1B.11.2. Check that the electropherogram shows a narrow distribution with a peak size approximately 300 bp. 
Note: If a peak at ~ 80 bp (primers) or 128 bp (adaptor-dimer) is visible in the Bioanalyzer traces, bring up the sample volume (from Step 1B.10.9. ) to 50 μl with 0.1X TE buffer and repeat the SPRIselect Bead or NEBNext Sample 
Purification Bead Cleanup Step (Section 1B.10.). Adaptor dimer peak range is derived from values observed on BioAnalyzer. Peaks may appear shifted on other library analysis instruments such as TapeStation or Fragment Analyzer. 
Figure 1B.11.2. Example of RNA library size distribution on a Bioanalyzer. 22 
# Section 2 Protocol for use with Non- Indexed Adaptor, NEBNext rRNA Depletion Kit v2 (Human/Mouse/Rat) (NEB #E7400, #E7405) and NEBNext Ultra II Directional RNA Library Prep Kit for Illumina (NEB #E7760, #E7765) 
Symbols 
This caution sign signifies a step in the protocol that has two paths leading to the same end point but is dependent on a user variable, like the type of RNA input. 
This is a point where you can safely stop the protocol and store the samples prior to proceeding to the next step in the protocol. 
# •
Colored bullets indicate the cap color of the reagent to be added. 
Keep all of the buffers on ice, unless otherwise indicated. 
RNA Sample Requirements 
RNA Integrity: 
Assess the quality of the input RNA by running the RNA sample on an Agilent Bioanalyzer RNA 6000 Nano/Pico Chip to determine the RNA Integrity Number (RIN). For intact (RIN > 7) or partially degraded RNA samples (RIN = 2 to 7) follow the library preparation protocol in Section 2 (current section) or 4. For highly degraded samples (e.g., FFPE) which do not require fragmentation, follow the library preparation protocol in Section 3 or 5. 
RNA Purity: 
The RNA sample should be free of salts (e.g., Mg 2+ , or guanidinium salts) or organics (e.g., phenol and ethanol). RNA must be free of DNA. gDNA is a common contaminant from RNA preps. It may be carried over from the interphase of organic extractions or when the silica matrix of solid phase RNA purification methods is overloaded. If the total RNA sample may contain gDNA contamination, treat the sample with DNase I to remove all traces of DNA (not provided in this kit). After treatment with DNase I the enzyme should be removed from the sample. Any residual activity of DNase I will degrade the single stranded DNA probes necessary for the ribosomal depletion. DNase I can be removed from the extraction using phenol/ chloroform extraction and ethanol precipitation. Prior to depletion the RNA must be in nuclease free water. Some products, e.g. TURBO DNA-free ™ Kit TURBO ™ DNase Treatment and Removal Reagents do not produce RNA in nuclease free water and are not compatible with NEBNext RNA depletion. Any residual activity of DNase I will degrade the single stranded DNA probes necessary for the ribosomal depletion. 
Input Amount: 
10 ng –1 μg intact or partially degraded total RNA (DNA free) in a maximum of 11 μl of nuclease-free water, quantified by an RNA-specific dye-assisted fluorometric method (e.g., Qubit, RiboGreen), and quality checked by Bioanalyzer. 
2.1. Probe Hybridization to RNA 
2.1.1. Dilute 10 ng –1 μg of total RNA with Nuclease -free Water to a final volume of 11 μl in a PCR tube. Keep the RNA on ice. 
2.1.2. Assemble the following RNA/Probe hybridization reaction on ice :
RNA/PROBE HYBRIDIZATION REACTION  VOLUME 
Total RNA in Nuclease-free Water (10 ng –1 μg)  11 μl 
# • (white) NEBNext v2 rRNA Depletion Solution  2 μl 
# • (white) NEBNext Probe Hybridization Buffer  2 μl 
Total Volume  15 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 23 
2.1.3. Mix thoroughly by pipetting up and down at least 10 times. Note: It is crucial to mix well at this step. 
2.1.4. Briefly spin down the tube in a microcentrifuge to collect the liquid from the side of the tube. 
2.1.5. Place tube in a pre-heated thermal cycler and run the following program with the heated lid set to 105°C. This will take approximately 15 –20 minutes to complete. 
TEMPERATURE  TIME 
95°C  2 minutes 
Ramp down to 22°C  0.1°C/sec 
22°C  5 minutes 
Hold at 4°C 
2.1.6. Briefly spin down the tube in a microcentrifuge and place on ice. Proceed immediately to the RNase H Digestion. 
2.2. RNase H Digestion 
2.2.1. Assemble the following RNase H digestion reaction on ice :
RNASE H DIGESTION REACTION  VOLUME 
Hybridized RNA (Step 2.1.6.)  15 μl 
# • (white) RNase H Reaction Buffer  2 μl 
# • (white) NEBNext Thermostable RNase H  2 μl 
Nuclease-free Water  1 μl 
Total Volume  20 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
2.2.2. Mix thoroughly by pipetting up and down at least 10 times. 
2.2.3. Briefly spin down the tube in a microcentrifuge. 
2.2.4. Incubate in a pre-heated thermal cycler for 30 minutes at 50°C with the lid set to 55°C and hold at 4°C. 
2.2.5. Briefly spin down the tube in a microcentrifuge and place on ice. Proceed immediately to DNase I Digestion. 
2.3. DNase I Digestion 
2.3.1. Assemble the following DNase I digestion reaction on ice :
DNASE I DIGESTION REACTION  VOLUME 
RNase H treated RNA (Step 2.2.5.)  20 μl 
# • (white) DNase I Reaction Buffer  5 μl 
# • (white) NEBNext DNase I (RNase-free)  2.5 μl 
Nuclease-free Water  22.5 μl 
Total Volume  50 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
2.3.2. Mix thoroughly by pipetting up and down at least 10 times. 
2.3.3. Briefly spin down the tube in a microcentrifuge. 
2.3.4. Incubate in a pre-heated thermal cycler for 30 minutes at 37°C with the heated lid set to 40°C (or off) and hold at 4°C. 
2.3.5. Briefly spin down the tube in a microcentrifuge and place on ice. Proceed immediately to RNA Purification. 
2.4. RNA Purification using Agencourt RNAClean XP Beads or NEBNext RNA Sample Purification Beads 
2.4.1. Vortex the Agencourt RNAClean XP Beads or NEBNext RNA Sample Purification Beads to resuspend. 24 
2.4.2. Add 90 μl (1.8X) beads to the RNA sample from Step 2.3.5. and mix thoroughly by pipetting up and down at least 10 times. 
2.4.3. Incubate for 15 minutes on ice to bind RNA to the beads. 
2.4.4. Place the tube on a magnetic rack to separate the beads from the supernatant. 
2.4.5. After the solution is clear (about 5 minutes), carefully remove and discard the supernatant. Be careful not to disturb the beads which contain the RNA. 
2.4.6. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic rack. Incubate at room temperature for 30 seconds and then carefully remove and discard the supernatant. Be careful not to disturb the beads which contain the RNA. 
2.4.7. Repeat Step 2.4.6. once for a total of 2 washes. 
2.4.8. Completely remove residual ethanol and air dry the beads for up to 5 minutes while the tube is on the magnetic rack with the lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of RNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
2.4.9. Remove the tube from the magnetic rack. Elute the RNA from the beads by adding 7 μl of Nuclease-free Water . Mix thoroughly by pipetting up and down at least 10 times and briefly spin the tube. 
2.4.10. Incubate for 2 minutes at room temperature. 
2.4.11. Place the tube on the magnetic rack until the solution is clear (about 2 minutes). 
2.4.12. Remove 5 μl of the supernatant containing RNA and transfer to a nuclease-free tube. 
2.4.13. Place the tube on ice and proceed to RNA Fragmentation and Priming. 
Note: If you need to stop at this point in the protocol samples can be stored at –80°C. 
2.5. RNA Fragmentation and Priming 
RNA fragmentation is only required for intact or partially degraded RNA. Recommended fragmentation times can be found in Tables 2.5.3A. and 2.5.3B. 
2.5.1. Assemble the following fragmentation and priming reaction on ice :
FRAGMENTATION AND PRIMING REACTION  VOLUME 
Ribosomal RNA Depleted Sample (Step 2.4.13.)  5 μl 
# • (lilac) NEBNext First Strand Synthesis Reaction Buffer  4 μl 
# • (lilac) Random Primers  1 μl 
Total Volume  10 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
2.5.2. Mix thoroughly by pipetting up and down 10 times. 
2.5.3. Place the tube in a thermal cycler and incubate as follows: 
Incubate at 94°C, with heated lid set at 105°C 
Hold at 4°C 
Follow the recommendations in Tables 2.5.3A. and 2.5.3B. for libraries with inserts ~200 nt. If ribosomal RNA peaks are present, suggesting higher quality, follow recommendations in Table 2.5.3A.. If ribosomal peaks are not present, then follow the DV200 recommendations in Table 2.5.3B. 25 
Table 2.5.3A. Suggested fragmentation times (at 94°C) based on RIN value of RNA input. 
RNA TYPE  RIN  FRAG. TIME 
Intact RNA  ≥ 7 8–15 minutes 
Partially Degraded RNA  2–6 8 minutes 
Table 2.5.3B. Suggested fragmentation times (at 94°C) based on DV200 of RNA input. 
RNA TYPE  DV200  FRAG. TIME 
Partially Degraded RNA  DV200 between 30 and 70  5 minutes 
Highly Degraded RNA  DV200 ≤ 30  5 minutes *
> *Results may vary due to the high degradation level of these samples.
Note: Refer to Appendix A (Section 6) for fragmentation conditions if you are preparing libraries with large inserts (> 200 bp). Conditions in Appendix A only apply for intact RNA. 
2.5.4. Immediately transfer the tube to ice and proceed to First Strand cDNA Synthesis. 
2.6. First Strand cDNA Synthesis 
2.6.1. Assemble the first strand synthesis reaction on ice by adding the following components to the fragmented and primed RNA from Step 2.5.4.: 
FIRST STRAND SYNTHESIS REACTION  VOLUME 
Fragmented and primed RNA (Step 2.5.4.)  10 μl 
# • (brown) NEBNext Strand Specificity Reagent  8 μl 
# • (lilac) NEBNext First Strand Synthesis Enzyme Mix  2 μl 
Total Volume  20 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
2.6.2. Mix thoroughly by pipetting up and down 10 times. 
2.6.3. Incubate the sample in a preheated thermal cycler with the heated lid set at ≥ 80°C as follows: 
Note: If you are following recommendations in Appendix A (Section 6), for libraries with longer inserts (> 200 bases), increase the incubation at 42°C from 15 minutes to 50 minutes at Step 2 below. 
Step 1: 10 minutes at 25°C 
Step 2: 15 minutes at 42°C 
Step 3: 15 minutes at 70°C 
Step 4: Hold at 4°C 
Proceed directly to Second Strand cDNA Synthesis. 26 
2.7. Second Strand cDNA Synthesis 
2.7.1. Assemble the second strand cDNA synthesis reaction on ice by adding the following components into the first strand synthesis product from Step 2.6.3. 
SECOND STRAND SYNTHESIS REACTION  VOLUME 
First-Strand Synthesis Product (Step 2.6.3.)  20 μl 
# • (orange) NEBNext Second Strand Synthesis Reaction Buffer with dUTP Mix  8 μl 
# • (orange) NEBNext Second Strand Synthesis Enzyme Mix  4 μl 
Nuclease-free Water  48 μl 
Total Volume  80 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
2.7.2. Keeping the tube on ice, mix thoroughly by pipetting up and down at least 10 times. 
2.7.3. Incubate in a thermal cycler for 1 hour at 16°C with the heated lid set at ≤ 40°C (or off). Proceed to Purification of Double-stranded cDNA. 
2.8. Purification of Double-stranded cDNA Using SPRIselect Beads or NEBNext Sample Purification Beads 
2.8.1. Vortex SPRIselect Beads or NEBNext Sample Purification Beads to resuspend. 
2.8.2. Add 144 μl (1.8X) of resuspended beads to the second strand synthesis reaction (~80 μl). Mix well on a vortex mixer or by 
pipetting up and down at least 10 times. 
2.8.3. Incubate for 5 minutes at room temperature. 
2.8.4. Briefly spin the tube in a microcentrifuge to collect any sample on the sides of the tube. Place the tube on a magnet to separate beads from the supernatant. After the solution is clear (about 5 minutes), carefully remove and discard the supernatant. Be careful not to disturb the beads, which contain DNA. (Caution: do not discard beads). 
2.8.5. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic rack. Incubate at room temperature for 30 seconds, and then carefully remove and discard the supernatant. 
2.8.6. Repeat Step 2.8.5. once for a total of 2 washing steps. 
2.8.7. Air dry the beads for up to 5 minutes while the tube is on the magnetic rack with lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
2.8.8. Remove the tube from the magnetic rack. Elute the DNA from the beads by adding 53 μl 0.1X TE Buffer (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down at least 10 times. Quickly spin the tube and incubate for 2 minutes at room temperature. Place the tube on the magnetic rack until the solution is clear (about 2 minutes). 
2.8.9. Remove 50 μl of the supernatant and transfer to a clean nuclease-free PCR tube. 
Note: If you need to stop at this point in the protocol samples can be stored at –20°C. 27 
2.9. End Prep of cDNA Library 
2.9.1. Assemble the end prep reaction on ice by adding the following components to the second strand synthesis product from Step 2.8.9. 
END PREP REACTION  VOLUME 
Second Strand cDNA Synthesis Product (Step 2.8.9.)  50 μl 
# • (green) NEBNext Ultra II End Prep Reaction Buffer  7 μl 
# • (green) NEBNext Ultra II End Prep Enzyme Mix  3 μl 
Total Volume  60 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. If a master mix is made, add 10 μl of master mix to 50 μl of cDNA for the End Prep reaction. 
2.9.2. Set a 100 μl or 200 μl pipette to 50 μl and then pipette the entire volume up and down at least 10 times to mix thoroughly. 
Perform a quick spin to collect all liquid from the sides of the tube. 
Note: It is important to mix well. The presence of a small amount of bubbles will not interfere with performance. 
2.9.3. Incubate the sample in a thermal cycler with the heated lid set at ≥ 75°C as follows. 
30 minutes at 20°C 
30 minutes at 65°C 
Hold at 4°C. 
Proceed immediately to Adaptor Ligation. 
2.10. Adaptor Ligation 
2.10.1. Dilute the  • (red) NEBNext Adaptor * prior to setting up the ligation reaction in ice-cold Adaptor Dilution Buffer and keep the adaptor on ice. 
TOTAL RNA INPUT  DILUTION REQUIRED 
1,000 –101 ng  5-fold dilution in Adaptor Dilution Buffer 
100 –10 ng  25-fold dilution in Adaptor Dilution Buffer  
> *The NEBNext adaptor is provided in NEBNext oligos kit. NEB has several oligo kit options, which are supplied separately from the library prep kit.
2.10.2. Assemble the ligation reaction on ice by adding the following components, in the order given, to the end prep reaction product from Step 2.9.3. 
LIGATION REACTION  VOLUME 
End Prepped DNA (Step 2.9.3.)  60 μl 
Diluted Adaptor (Step 2.10.1.)  2.5 μl 
# • (red) NEBNext Ligation Enhancer  1 μl 
# • (red) NEBNext Ultra II Ligation Master Mix  30 μl 
Total Volume  93.5 μl 
Note: The Ligation Master Mix and Ligation Enhancer can be mixed ahead of time and is stable for at least 8 hours at 4°C. Do not premix the Ligation Master Mix, Ligation Enhancer and adaptor prior to use in the Adaptor Ligation Step. 
2.10.3. Set a 100 μl or 200 μl pipette to 80 μl and then pipette the entire volume up and down at least 10 times to mix thoroughly. 
Perform a quick spin to collect all liquid from the sides of the tube. 
Caution: The NEBNext Ultra II Ligation Master Mix is very viscous. Care should be taken to ensure adequate mixing of the ligation reaction, as incomplete mixing will result in reduced ligation efficiency. The presence of a small amount of bubbles will not interfere with performance. 
2.10.4. Incubate 15 minutes at 20°C in a thermal cycler with the heated lid off. 28 
2.10.5. Add 3 μl (blue or red) USER Enzyme to the ligation mixture from Step 2.10.4. , resulting in total volume of 96.5 μl. 
2.10.6. Mix well and incubate at 37°C for 15 minutes with the heated lid set to ≥ 45°C , hold at 4°C. Proceed immediately to Purification of the Ligation Reaction. 
2.11. Purification of the Ligation Reaction Using SPRIselect Beads or NEBNext Sample Purification Beads 
Note: If you are selecting for libraries with larger insert size (> 200 nt) follow the size selection recommendations in Appendix A, Section 6. 
2.11.1. Add 87 μl (0.9X) resuspended SPRIselect Beads or NEBNext Sample Purification Beads and mix well on a vortex mixer or by pipetting up and down at least 10 times. 
2.11.2. Incubate for 10 minutes at room temperature. 
2.11.3. Quickly spin the tube in a microcentrifuge and place the tube on an appropriate magnetic rack to separate beads from the supernatant. After the solution is clear (about 5 minutes), discard the supernatant that contains unwanted fragments. (Caution: do not discard beads). 
2.11.4. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic rack. Incubate at room temperature for 30 seconds, and then carefully remove and discard the supernatant. 
2.11.5. Repeat Step 2.11.4. once for a total of 2 washing steps. 
2.11.6. Briefly spin the tube and put the tube back in the magnetic rack. 
2.11.7. Completely remove the residual ethanol and air dry beads for up to 5 minutes while the tube is on the magnetic rack with the lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
2.11.8. Remove the tube from the magnetic rack. Elute DNA target from the beads by adding 17 μl 0.1X TE (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down. Quickly spin the tube and incubate for 2 minutes at room temperature. Put the tube in the magnet until the solution is clear (about 2 minutes). 
2.11.9. Without disturbing the bead pellet, transfer 15 μl of the supernatant to a clean PCR tube and proceed to PCR enrichment. 
Note: If you need to stop at this point in the protocol samples can be stored at –20°C. 29 
2.12. PCR Enrichment of Adaptor Ligated DNA 
Use Option A for any NEBNext oligos kit where index primers are supplied in tubes. These kits have the forward and reverse primers supplied in separate tubes. 
Use Option B for any NEBNext oligos kit where index primers are supplied in a 96-well plate format. These kits have the forward and reverse (i7 and i5) primers combined. Primers are supplied at 10 μM combined (5 μM each). 
2.12.1. Set up the PCR reaction as described below based on the type of oligos (PCR primers) used. 
2.12.1A. Forward and Reverse Primers Separate 
COMPONENT  VOLUME PER ONE LIBRARY 
Adaptor Ligated DNA (Step 2.11.9.)  15 μl 
# • (blue) NEBNext Ultra II Q5 Master Mix  25 μl 
Index (X) Primer/i7 Primer *, **  5 μl 
Universal PCR Primer/i5 Primer *,**  5 μl 
Total Volume  50 μl   
> *NEBNext Oligos must be purchased separately from the library prep kit. Refer to the corresponding NEBNext Oligo kit manual for determining valid barcode combinations.
> ** Use only one i7 primer/ index primer per sample. Use only one i5 primer (or the universal primer for single index kits) per sample.
2.12.1B. Forward and Reverse Primers Combined 
COMPONENT  VOLUME PER ONE LIBRARY 
Adaptor Ligated DNA (Step 2.11.9.)  15 μl 
# • (blue) NEBNext Ultra II Q5 Master Mix  25 μl 
Index Primer Mix*  10 μl 
Total Volume  50 μl  
> *NEBNext Oligos must be purchased separately from the library prep kit. Refer to the corresponding NEBNext Oligo kit manual for determining valid barcode combinations.
2.12.2. Mix well by gently pipetting up and down 10 times. Quickly spin the tube in a microcentrifuge. 
2.12.3. Place the tube on a thermal cycler with the heated lid set to 105°C and perform PCR amplification using the following PCR cycling conditions (refer to Table 2.12.3A. and Table 2.12.3B.): 
Table 2.12.3A: 
CYCLE STEP  TEMP  TIME  CYCLES 
Initial Denaturation  98°C  30 seconds  1
Denaturation  98°C  10 seconds  7–16 *, ** 
Annealing/Extension  65°C  75 seconds 
Final Extension  65°C  5 minutes  1
Hold  4°C  ∞  
> *The number of PCR cycles should be adjusted based on RNA input.
> ** It is important to limit the number of PCR cycles to avoid overamplification. If overamplification occurs, a second peak ~ 1,000 bp will appear on the Bioanalyzer trace (See Figure 7.2 in the Troubleshooting Guide, Section 7).
# 30 
Table 2.12.3B: Recommended PCR cycles based on total RNA input amount: 
TOTAL RNA INPUT  RECOMMENDED PCR CYCLES 
1,000 ng  7–8
100 ng  11 –12 
10 ng  14 –15 
Note: PCR cycles are recommended based on high quality Universal Human Reference Total RNA. It may require optimization based on the sample quality to prevent PCR over-amplification. 
2.13. Purification of the PCR Reaction using SPRIselect Beads or NEBNext Sample Purification Beads 
2.13.1. Vortex SPRIselect Beads or NEBNext Sample Purification Beads to resuspend. 
2.13.2. Add 45 μl (0.9X) of resuspended beads to the PCR reaction (~ 50 μl). Mix well on a vortex mixer or by pipetting up and down 
at least 10 times. 
2.13.3. Incubate for 5 minutes at room temperature. 
2.13.4. Quickly spin the tube in a microcentrifuge and place the tube on an appropriate magnetic rack to separate beads from the supernatant. After the solution is clear (about 5 minutes), carefully remove and discard the supernatant. Be careful not to disturb the beads that contain DNA targets. (Caution: do not discard beads). 
2.13.5. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic rack. Incubate at room temperature for 30 seconds, and then carefully remove and discard the supernatant. 
2.13.6. Repeat Step 2.13.5. once for a total of 2 washing steps. 
2.13.7. Air dry the beads for up to 5 minutes while the tube is on the magnetic rack with the lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
2.13.8. Remove the tube from the magnetic rack. Elute the DNA target from the beads by adding 23 μl 0.1X TE (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down 10 times. Quickly spin the tube in a microcentrifuge and incubate for 2 minutes at room temperature. Place the tube in the magnetic rack until the solution is clear (about 2 minutes). 
2.13.9. Transfer 20 μl of the supernatant to a clean PCR tube. 
Note: At this point in the protocols samples can be stored at –20°C. 31 
2.14. Assess Library Quality on an Agilent Bioanalyzer DNA Chip 
2.14.1. Run 1 μl library on a DNA 1000 chip. If the library yield is too low to quantify on this chip, please run the samples on a DN A High Sensitivity chip. A dilution may be necessary for running on a Bioanalyzer High Sensitivity DNA Chip. 
2.14.2. Check that the electropherogram shows a narrow distribution with a peak size approximately 300 bp. 
Note: If a peak at ~ 80 bp (primers) or 128 bp (adaptor-dimer) is visible in the Bioanalyzer traces, bring up the sample volume (from Step 2.13.9. ) to 50 μl with 0.1X TE buffer and repeat the SPRIselect Bead or NEBNext Sample Purification 
Bead Cleanup Step (Section 2.13.). Adaptor dimer peak range is derived from values observed on BioAnalyzer. Peaks may appear shifted on other library analysis instruments such as TapeStation or Fragment Analyzer. 
Figure 2.14.2 Example of RNA library size distribution on a Bioanalyzer. 32 
# Section 3 Protocol for use with FFPE RNA, Non-Indexed Adaptor, NEBNext rRNA Depletion Kit v2 (Human/Mouse/Rat) (NEB #E7400, #E7405) and NEBNext Ultra II Directional RNA Library Prep Kit for Illumina (NEB #E7760, #E7765) 
Symbols 
This caution sign signifies a step in the protocol that has two paths leading to the same end point but is dependent on a user variable, like the type of RNA input. 
This is a point where you can safely stop the protocol and store the samples prior to proceeding to the next step in the protocol. 
# •
Colored bullets indicate the cap color of the reagent to be added. 
Keep all of the buffers on ice, unless otherwise indicated. 
The protocol has been optimized using high quality Universal Human Reference Total RNA and FFPE RNA. 
RNA Sample Requirements 
RNA Integrity: 
Assess the quality of the input RNA by running the RNA sample on an Agilent Bioanalyzer RNA 6000 Nano/Pico Chip to determine the RNA Integrity Number (RIN). RNA with different RIN values require different fragmentation times or no fragmentation at all. 
For intact (RIN > 7) or partially degraded RNA samples (RIN = 2 to 7) follow the library preparation protocol in Section 2 or 4. For highly degraded samples (RIN= 1 or 2) (e.g., FFPE) which do not require fragmentation, follow the library preparation protocol in Section 3 (current section) or 5. 
RNA Purity: 
The RNA sample should be free of salts (e.g., Mg 2+ , or guanidinium salts) or organics (e.g., phenol and ethanol). RNA must be free of DNA. gDNA is a common contaminant from RNA preps. It may be carried over from the interphase of organic extractions or when the silica matrix of solid phase RNA purification methods is overloaded. If the total RNA sample may contain gDNA contamination, treat the sample with DNase I to remove all traces of DNA (not provided in this kit). After treatment with DNase I the enzyme should be removed from the sample. Any residual activity of DNase I will degrade the single stranded DNA probes necessary for the ribosomal depletion. DNase I can be removed from the extraction using phenol/ chloroform extraction and ethanol precipitation. Prior to depletion the RNA must be in nuclease free water. Some products, e.g. TURBO DNA-free ™ Kit TURBO ™ DNase Treatment and Removal Reagents do not produce RNA in nuclease free water and are not compatible with NEBNext RNA depletion. 
Input Amount: 
10 –100 ng degraded (e.g., FFPE) total RNA (DNA free) in a maximum of 11 μl of nuclease-free water, quantified by an RNA-specific dye-assisted fluorometric method (e.g., Qubit, RiboGreen), and quality checked by Bioanalyzer. 
3.1. Probe Hybridization to RNA 
3.1.1. Dilute 10 –100 ng of total RNA with Nuclease-free Water to a final volume of 11 μl in a PCR tube. Keep the RNA on ice. 
3.1.2. Assemble the following RNA/Probe hybridization reaction on ice :
RNA/PROBE HYBRIDIZATION REACTION  VOLUME 
Total RNA in Nuclease-free Water (10 –100 ng)  11 μl 
# • (white) NEBNext v2 rRNA Depletion Solution  2 μl 
# • (white) NEBNext Probe Hybridization Buffer  2 μl 
Total Volume  15 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 33 
3.1.3. Mix thoroughly by pipetting up and down at least 10 times. Note: It is crucial to mix well at this step. 
3.1.4. Briefly spin down the tube in a microcentrifuge to collect the liquid from the side of the tube. 
3.1.5. Place tube in a pre-heated thermal cycler and run the following program with the heated lid set to 105°C. This will take approximately 15 –20 minutes to complete. 
TEMPERATURE  TIME 
95°C  2 minutes 
Ramp down to 22°C  0.1°C/sec 
22°C  5 minutes 
Hold at 4°C 
3.1.6. Briefly spin down the tube in a microcentrifuge and place on ice. Proceed immediately to RNase H Digestion. 
3.2. RNase H Digestion 
3.2.1. Assemble the following RNase H digestion reaction on ice :
RNASE H DIGESTION REACTION  VOLUME 
Hybridized RNA (Step 3.1.6.)  15 μl 
# • (white) RNase H Reaction Buffer  2 μl 
# • (white) NEBNext Thermostable RNase H  2 μl 
Nuclease-free Water  1 μl 
Total Volume  20 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
3.2.2. Mix thoroughly by pipetting up and down at least 10 times. 
3.2.3. Briefly spin down the tube in a microcentrifuge. 
3.2.4. Incubate in a pre-heated thermal cycler for 30 minutes at 50°C with the lid set to 55°C, hold at 4°C. 
3.2.5. Briefly spin down the tube in a microcentrifuge and place on ice. Proceed immediately to DNase I Digestion. 
3.3. DNase I Digestion 
3.3.1. Assemble the following DNase I digestion reaction on ice :
DNASE I DIGESTION REACTION  VOLUME 
RNase H treated RNA (Step 3.2.5.)  20 μl 
# • (white) DNase I Reaction Buffer  5 μl 
# • (white) NEBNext DNase I (RNase-free)  2.5 μl 
Nuclease-free Water  22.5 μl 
Total Volume  50 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
3.3.2. Mix thoroughly by pipetting up and down at least 10 times. 
3.3.3. Briefly spin down the tube in a microcentrifuge. 
3.3.4. Incubate in a pre-heated thermal cycler for 30 minutes at 37°C with the heated lid set to 40°C (or off) and hold at 4°C. 
3.3.5. Briefly spin down the tube in a microcentrifuge and place on ice. Proceed immediately to RNA Purification. 34 
3.4. RNA Purification using Agencourt RNAClean XP Beads or NEBNext RNA Sample Purification Beads 
3.4.1. Vortex the Agencourt RNAClean XP Beads or NEBNext RNA Sample Purification Beads to resuspend. 
3.4.2. Add 90 μl (1.8X) beads to the RNA sample from Step 3.3.5. and mix thoroughly by pipetting up and down at least 10 times. 
3.4.3. Incubate for 15 minutes on ice to bind RNA to the beads. 
3.4.4. Place the tube on a magnetic rack to separate the beads from the supernatant. 
3.4.5. After the solution is clear (about 5 minutes), carefully remove and discard the supernatant. Be careful not to disturb the beads which contain the RNA. 
3.4.6. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic rack. Incubate at room temperature for 30 seconds and then carefully remove and discard the supernatant. Be careful not to disturb the beads which contain the RNA. 
3.4.7. Repeat Step 3.4.6. once for a total of 2 washes. 
3.4.8. Completely remove residual ethanol and air dry the beads for up to 5 minutes while the tube is on the magnetic rack with the lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of RNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
3.4.9. Remove the tube from the magnetic rack. Elute the RNA from the beads by adding 7 μl of Nuclease-free Water . Mix thoroughly by pipetting up and down at least 10 times and briefly spin the tube. 
3.4.10. Incubate for 2 minutes at room temperature. 
3.4.11. Place the tube on the magnetic rack until the solution is clear (about 2 minutes). 
3.4.12. Remove 5 μl of the supernatant containing RNA and transfer to a nuclease-free tube. 
3.4.13. Place the tube on ice and proceed to RNA Priming. 
Note: If you need to stop at this point in the protocol samples can be stored at –80°C. 
3.5. Priming of Highly Degraded RNA (FFPE) Which has a RIN ≤ 2 and does not Require Fragmentation 
3.5.1. Assemble the Priming Reaction on ice by adding the following components: 
PRIMING REACTION  VOLUME 
rRNA Depleted Sample (Step 3.4.13.)  5 μl 
# • (lilac) Random Primers  1 μl 
Total Volume  6 μl 
3.5.2. Mix thoroughly by pipetting up and down 10 times. 
3.5.3. Briefly spin down the samples in a microcentrifuge. 
3.5.4. Incubate the sample in a preheated thermal cycler as follows. 
5 minutes at 65°C, with heated lid set at 105°C. 
Hold at 4°C. 
3.5.5. Transfer the tube directly to ice and proceed to First Strand cDNA Synthesis. 35 
3.6. First Strand cDNA Synthesis 
3.6.1. Assemble the first strand synthesis reaction on ice by adding the following components to the primed RNA from Step 3.5.5.: 
FIRST STRAND SYNTHESIS REACTION  VOLUME 
Primed RNA (Step 3.5.5.)  6 μl 
# • (brown) NEBNext Strand Specificity Reagent  8 μl 
# • (lilac) NEBNext First Strand Synthesis Reaction Buffer  4 μl 
# • (lilac) NEBNext First Strand Synthesis Enzyme Mix  2 μl 
Total Volume  20 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
3.6.2. Keeping the tube on ice, mix thoroughly by pipetting up and down 10 times. 
3.6.3. Incubate the sample in a preheated thermal cycler with the heated lid set at ≥ 80°C as follows: 
Step 1: 10 minutes at 25°C 
Step 2: 15 minutes at 42°C 
Step 3: 15 minutes at 70°C 
Step 4: Hold at 4°C 
Proceed directly to Second Strand cDNA Synthesis Reaction. 
3.7. Second Strand cDNA Synthesis 
3.7.1 Assemble the second strand cDNA synthesis reaction on ice by adding the following components to the first strand reaction product from Step 3.6.3. 
SECOND STRAND SYNTHESIS REACTION  VOLUME 
First-Strand Synthesis Product (Step 3.6.3.)  20 μl 
# • (orange) NEBNext Second Strand Synthesis Reaction Buffer with dUTP Mix  8 μl 
# • (orange) NEBNext Second Strand Synthesis Enzyme Mix  4 μl 
Nuclease-free Water  48 μl 
Total Volume  80 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
3.7.2 Keeping the tube on ice, mix thoroughly by pipetting up and down 10 times. 
3.7.3 Incubate in a thermal cycler for 1 hour at 16°C with the heated lid set at ≤ 40°C (or off). Proceed to Purification of Double-stranded cDNA. 
3.8. Purification of Double-stranded cDNA Using SPRIselect Beads or NEBNext Sample Purification Beads 
3.8.1. Vortex SPRIselect Beads or NEBNext Sample Purification Beads to resuspend. 
3.8.2. Add 144 μl (1.8X) of resuspended beads to the second strand synthesis reaction (~80 μl). Mix well on a vortex mixer or by 
pipetting up and down at least 10 times. 
3.8.3. Incubate for up to 5 minutes at room temperature. 
3.8.4. Briefly spin the tube in a microcentrifuge to collect any sample on the sides of the tube. Place the tube on a magnet to separate beads from the supernatant. After the solution is clear (about 5 minutes), carefully remove and discard the supernatant. Be careful not to disturb the beads, which contain DNA. (Caution: do not discard beads). 
3.8.5. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic stand. Incubate at room temperature for 30 seconds, and then carefully remove and discard the supernatant. 
3.8.6. Repeat Step 3.8.5. once for a total of 2 washing steps. 36 
3.8.7. Air dry the beads for up to 5 minutes while the tube is on the magnet with lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
3.8.8. Remove the tube from the magnet. Elute the DNA from the beads by adding 53 μl 0.1X TE Buffer (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down 10 times. Quickly spin the tube and incubate for 2 minutes at room temperature. Place the tube on the magnetic rack until the solution is clear (about 2 minutes). 
3.8.9. Remove 50 μl of the supernatant and transfer to a clean nuclease free PCR tube. 
Note: If you need to stop at this point in the protocol samples can be stored at –20°C. 
3.9. End Prep of cDNA Library 
3.9.1. Assemble the end prep reaction on ice by adding the following components to the second strand synthesis product from Step 3.8.9. 
END PREP REACTION  VOLUME 
Second Strand Synthesis Product (Step 3.8.9.)  50 μl 
# • (green) NEBNext Ultra II End Prep Reaction Buffer  7 μl 
# • (green) NEBNext Ultra II End Prep Enzyme Mix  3 μl 
Total Volume  60 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. If a master mix is made, add 10 μl of master mix to 50 μl of cDNA for the End Prep reaction. 
3.9.2. Set a 100 μl or 200 μl pipette to 50 μl and then pipette the entire volume up and down at least 10 times to mix thoroughly. 
Perform a quick spin to collect all liquid from the sides of the tube. 
Note: It is important to mix well. The presence of a small amount of bubbles will not interfere with performance. 
3.9.3. Incubate the sample in a thermal cycler with the heated lid set at ≥ 75°C as follows. 
30 minutes at 20°C 
30 minutes at 65°C 
Hold at 4°C. 
Proceed immediately to Adaptor Ligation. 
3.10. Adaptor Ligation 
3.10.1. Dilute the  • (red) NEBNext Adaptor * prior to setting up the ligation reaction in ice-cold Adaptor Dilution Buffer and keep the diluted adaptor on ice. 
FFPE RNA  DILUTION REQUIRED 
100 –10 ng  25-fold dilution in Adaptor Dilution Buffer  
> *The NEBNext adaptor is provided in NEBNext oligos kit. NEB has several oligo kit options, which are supplied separately from the library prep kit.
# 37 
3.10.2. Assemble the ligation reaction on ice by adding the following components, in the order given, to the end prep reaction product from Step 3.9.3. 
LIGATION REACTION  VOLUME 
End Prepped DNA (Step 3.9.3.)  60 μl 
Diluted Adaptor (Step 3.10.1.)  2.5 μl 
# • (red) NEBNext Ligation Enhancer  1 μl 
# • (red) NEBNext Ultra II Ligation Master Mix  30 μl 
Total Volume  93.5 μl 
Note: The Ligation Master Mix and Ligation Enhancer can be mixed ahead of time and is stable for at least 8 hours at 4°C. Do not premix the Ligation Master Mix, Ligation Enhancer and adaptor prior to use in the Adaptor Ligation Step. 
3.10.3. Set a 100 μl or 200 μl pipette to 80 μl and then pipette the entire volume up and down at least 10 times to mix thoroughly. 
Perform a quick spin to collect all liquid from the sides of the tube. 
Caution: The NEBNext Ultra II Ligation Master Mix is very viscous. Care should be taken to ensure adequate mixing of the ligation reaction, as incomplete mixing will result in reduced ligation efficiency. The presence of a small amount of bubbles will not interfere with performance. 
3.10.4. Incubate 15 minutes at 20°C in a thermal cycler with the heated lid off. 
3.10.5. Add 3 μl (blue or red) USER Enzyme to the ligation mixture from Step 3.10.4. , resulting in total volume of 96.5 μl. 
3.10.6. Mix well and incubate at 37°C for 15 minutes with the heated lid set to ≥ 45°C , hold at 4°C. Proceed immediately to Purification of the Ligation Reaction. 
3.11. Purification of the Ligation Reaction Using SPRIselect Beads or NEBNext Sample Purification Beads 
3.11.1. Add 87 μl (0.9X) resuspended SPRIselect Beads or NEBNext Sample Purification Beads and mix well on a vortex mixer or by pipetting up and down at least 10 times. 
3.11.2. Incubate for 10 minutes at room temperature. 
3.11.3. Quickly spin the tube in a microcentrifuge and place the tube on an appropriate magnetic rack to separate beads from the supernatant. After the solution is clear (about 5 minutes), discard the supernatant that contains unwanted fragments. (Caution: do not discard beads) .
3.11.4. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic rack. Incubate at room temperature for 30 seconds, and then carefully remove and discard the supernatant. 
3.11.5. Repeat Step 3.11.4. once for a total of 2 washing steps. 
3.11.6. Briefly spin the tube and put the tube back in the magnetic rack. 
3.11.7. Completely remove the residual ethanol and air dry beads for up to 5 minutes while the tube is on the magnetic rack with the lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
3.11.8. Remove the tube from the magnetic rack. Elute DNA target from the beads by adding 17 μl 0.1X TE (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down, incubate for 2 minutes at room temperature. Put the tube in the magnet until the solution is clear (about 2 minutes). 
3.11.9. Without disturbing the bead pellet, transfer 15 μl of the supernatant to a clean PCR tube and proceed to PCR enrichment. 
Note: If you need to stop at this point in the protocol samples can be stored at –20°C. 38 
3.12. PCR Enrichment of Adaptor Ligated DNA 
Use Option A for any NEBNext oligos kit where index primers are supplied in tubes. These kits have the forward and reverse primers supplied in separate tubes. 
Use Option B for any NEBNext oligos kit where index primers are supplied in a 96-well plate format. These kits have the forward and reverse (i7 and i5) primers combined. Primers are supplied at 10 μM combined (5 μM each). 
3.12.1. Set up the PCR reaction as described below based on the type of oligos (PCR primers) used. 
3.12.1A. Forward and Reverse Primers Separate 
COMPONENT  VOLUME PER ONE LIBRARY 
Adaptor Ligated DNA (Step 3.11.9.)  15 μl 
# • (blue) NEBNext Ultra II Q5 Master Mix  25 μl 
Index (X) Primer/i7 Primer *, **  5 μl 
Universal PCR Primer/i5 Primer *,**  5 μl 
Total Volume  50 μl   
> *NEBNext Oligos must be purchased separately from the library prep kit. Refer to the corresponding NEBNext Oligo kit manual for determining valid barcode combinations.
> ** Use only one i7 primer/ index primer per sample. Use only one i5 primer (or the universal primer for single index kits) per sample.
3.12.1B. Forward and Reverse Primers Combined 
COMPONENT  VOLUME PER ONE LIBRARY 
Adaptor Ligated DNA (Step 3.11.9.)  15 μl 
# • (blue) NEBNext Ultra II Q5 Master Mix  25 μl 
Index Primer Mix * 10 μl 
Total Volume  50 μl  
> *NEBNext Oligos must be purchased separately from the library prep kit. Refer to the corresponding NEBNext Oligo kit manual for determining valid barcode combinations.
3.12.2. Mix well by gently pipetting up and down 10 times. Quickly spin the tube in a microcentrifuge. 
3.12.3. Place the tube on a thermal cycler with the heated lid set to 105°C and perform PCR amplification using the following PCR cycling conditions (refer to Table 3.12.3A. and Table 3.12.3B.): 
Table 3.12.3A.: 
CYCLE STEP  TEMP  TIME  CYCLES 
Initial Denaturation  98°C  30 seconds  1
Denaturation  98°C  10 seconds  12 –16 *, ** 
Annealing/Extension  65°C  75 seconds 
Final Extension  65°C  5 minutes  1
Hold  4°C  ∞
* The number of PCR cycles should be adjusted based on RNA input. The recommendation of PCR cycles has been optimized using fragmented UHR and FFPE RNA. 
** It is important to limit the number of PCR cycles to avoid overamplification. If overamplification occurs, a second peak ~ 1,000 bp will appear on the Bioanalyzer trace (See Figure 7.2 in the Troubleshooting Guide, Section 7). 
Table 3.12.3B.: Recommended PCR cycles based on input amount: 
FFPE RNA INPUT  RECOMMENDED PCR CYCLES 
100 ng  12 –13 
10 ng  15 –16 39 
3.13. Purification of the PCR Reaction using SPRIselect Beads or NEBNext Sample Purification Beads 
3.13.1. Vortex SPRIselect Beads or NEBNext Sample Purification Beads to resuspend. 
3.13.2. Add 45 μl (0.9X) of resuspended beads to the PCR reaction (~ 50 μl). Mix well on a vortex mixer or by pipetting up and down 
at least 10 times. 
3.13.3. Incubate for up to 5 minutes at room temperature. 
3.13.4. Quickly spin the tube in a microcentrifuge and place the tube on an appropriate magnetic rack to separate beads from the supernatant. After the solution is clear (about 5 minutes), carefully remove and discard the supernatant. Be careful not to disturb the beads that contain DNA targets. (Caution: do not discard beads). 
3.13.5. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic rack. Incubate at room temperature for 30 seconds, and then carefully remove and discard the supernatant. 
3.13.6. Repeat Step 3.13.5. once for a total of 2 washing steps. 
3.13.7. Air dry the beads for up to 5 minutes while the tube is on the magnetic rack with the lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
3.13.8. Remove the tube from the magnetic rack. Elute the DNA target from the beads by adding 23 μl 0.1X TE (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down 10 times, quickly spin the tube in a microcentrifuge and incubate for 2 minutes at room temperature. Place the tube in the magnetic rack until the solution is clear (about 2 minutes). 
3.13.9. Transfer 20 μl of the supernatant to a clean PCR tube. 
Note: At this point in the protocol samples can be stored at –20°C. 
3.14. Assess Library Quality on an Agilent Bioanalyzer DNA Chip 
3.14.1. Run 1 μl library on a DNA High Sensitivity Chip. A dilution may be necessary for running on a Bioanalyzer High Sensitivity DNA Chip. 
3.14.2. Check that the electropherogram shows a narrow distribution with a peak size approximately 300 bp. 
Note: If a peak at ~ 80 bp (primers) or 128 bp (adaptor-dimer) is visible in the Bioanalyzer traces, bring up the sample volume (from Step 3.13.9. ) to 50 μl with 1X TE Buffer and repeat the SPRIselect Bead or NEBNext Sample Purification 
Bead Cleanup Step (Section 3.13.). Adaptor dimer peak range is derived from values observed on BioAnalyzer. Peaks may appear shifted on other library analysis instruments such as TapeStation or Fragment Analyzer. 
Figure 3.14.2. Example of FFPE RNA library size distribution on a Bioanalyzer. 40 
# Section 4 Protocols for use with Purified mRNA or rRNA Depleted RNA, Non-Indexed Adaptor and NEBNext Ultra II Directional RNA Library Prep Kit for Illumina (NEB #E7760, E7765) 
Symbols 
This caution sign signifies a step in the protocol that has two paths leading to the same end point but is dependent on a user variable, like the type of RNA input. 
This is a point where you can safely stop the protocol and store the samples prior to proceeding to the next step in the protocol. 
# •
Colored bullets indicate the cap color of the reagent to be added. 
RNA Sample Requirements 
This Section can be used for libraries without any enrichment or depletion of total RNA with RIN scores > 7. 
RNA Integrity: 
RNA Integrity Number (RIN) is computed using ribosomal RNA (rRNA) amount in the sample. If rRNA is removed by any method, the RIN value should not be used to evaluate the integrity of the RNA sample. In this case, NEB recommends that the fragmentation time is empirically determined if the RNA sample is suspected to be low quality. The following recommendation apply to the total RNA samples only. 
Assess the quality of the input RNA by running the RNA sample on an Agilent Bioanalyzer RNA 6000 Nano/Pico Chip to determine the RNA Integrity Number (RIN). RNA with different RIN values require different fragmentation times or no fragmentation at all. 
For intact (RIN > 7) or partially degraded RNA samples (RIN = 2 to 7) follow the library preparation protocol in Section 4 (current Section). See Tables 4.1.3A. and 4.1.3B. for the recommended the fragmentation times. 
For highly degraded samples (RIN = 1 to 2) (e.g., FFPE), which do not require fragmentation, follow the library preparation protocol in Section 5. 
RNA Sample Requirements: 
The RNA sample should be free of salts (e.g., Mg 2+ , or guanidinium salts, divalent cation chelating agents (e.g., EDTA or EGTA) or organics (e.g., phenol or ethanol). RNA must be free of DNA. gDNA is a common contaminant from RNA preps. It may be carried over from the interphase of organic extractions or when the silica matrix of solid phase RNA purification methods is overloaded. If the total RNA sample may contain gDNA contamination, treat the sample with DNase I to remove all traces of DNA (DNase is not provided in this kit). After treatment with DNase I the enzyme should be removed from the sample. DNase I can be removed from the extraction using phenol/chloroform extraction and ethanol precipitation. 
Input Amount Requirements 
1–100 ng purified mRNA or rRNA depleted RNA* that is quantified after the purification . RNA should be DNA free in up to 5 μl of Nuclease-free Water, quantified by Qubit Fluorometer and quality checked by Bioanalyzer. 
The protocol is optimized for approximately 200 nt RNA inserts. To generate libraries with longer RNA insert sizes, refer to Appendix A (Section 6) for recommended fragmentation times and size selection conditions. 
This protocol has been optimized using Universal Human Reference Total RNA. 
> * or Total RNA samples, if mRNA enrichment or depletion is not desired
# 41 
4.1. RNA Fragmentation and Priming 
RNA fragmentation is only required for intact or partially degraded RNA. Recommended fragmentation times can be found in Tables 4.1.3A. and 4.1.3B. 
4.1.1. Assemble the fragmentation and priming reaction on ice in a nuclease-free tube by adding the following components: 
FRAGMENTATION AND PRIMING MIX  VOLUME 
Purified mRNA or rRNA Depleted RNA  5 μl 
# • (lilac) NEBNext First Strand Synthesis Reaction Buffer  4 μl 
# • (lilac) Random Primers  1 μl 
Total Volume  10 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
4.1.2. Mix thoroughly by pipetting up and down 10 times. 
4.1.3. Place the tube in a thermal cycler and incubate as follows: 
Incubate at 94°C with the heated lid set to 105°C 
Hold at 4°C 
Follow the recommendations in Tables 4.1.3A. and 4.1.3B. for libraries with inserts ~200 nt. If ribosomal RNA peaks are present, suggesting higher quality, follow recommendations in Table 4.1.3A. If ribosomal peaks are not present, then follow the DV200 recommendations in Table 4.1.3B. 
Table 4.1.3A. Suggested fragmentation times (at 94°C) based on RIN value of RNA input. 
RNA TYPE  RIN  FRAG. TIME 
Intact RNA  ≥ 7 8–15 minutes 
Partially Degraded RNA  2–6 8 minutes 
Table 4.1.3B. Suggested fragmentation times (at 94°C) based on DV200 of RNA input. 
RNA TYPE  DV200  FRAG. TIME 
Partially Degraded RNA  DV200 between 30 and 70  5 minutes 
Highly Degraded RNA  DV200 ≤ 30  5 minutes*  
> *Results may vary due to the high degradation level of these samples.
Note: Refer to Appendix A (Section 6) for fragmentation conditions if you are preparing libraries with large inserts (> 200 bp). Conditions in Appendix A (Section 6) only apply for intact RNA. 
4.1.4. Immediately transfer the tube to ice and proceed to First Strand cDNA Synthesis. 
4.2. First Strand cDNA Synthesis Reaction 
4.2.1. Assemble the first strand synthesis reaction on ice by adding the following components to the fragmented and primed RNA from Step 4.1.4.: 
FIRST STRAND SYNTHESIS REACTION  VOLUME 
Fragmented and Primed RNA (Step 4.1.4.)  10 μl 
# • (brown) NEBNext Strand Specificity Reagent  8 μl 
# • (lilac) NEBNext First Strand Synthesis Enzyme Mix  2 μl 
Total Volume  20 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 42 
4.2.2. Mix thoroughly by pipetting up and down 10 times. 
4.2.3. Incubate the sample in a preheated thermal cycler with the heated lid set at ≥ 80°C as follows: 
Note: If you are following recommendations in Appendix A, (Section 6), for longer RNA fragments (creating inserts > 200 bases), increase the incubation at 42°C from 15 minutes to 50 minutes at Step 2 below. 
Step 1: 10 minutes at 25°C 
Step 2: 15 minutes at 42°C 
Step 3: 15 minutes at 70°C 
Step 4: Hold at 4°C 
Proceed directly to Second Strand cDNA Synthesis. 
4.3. Second Strand cDNA Synthesis 
4.3.1. Assemble the second strand cDNA synthesis reaction on ice by adding the following components to the first strand reaction product from Step 4.2.3. 
SECOND STRAND SYNTHESIS REACTION  VOLUME 
First-Strand Synthesis Product (Step 4.2.3.)  20 μl 
# • (orange) NEBNext Second Strand Synthesis Reaction Buffer with dUTP Mix  8 μl 
# • (orange) NEBNext Second Strand Synthesis Enzyme Mix  4 μl 
Nuclease-free Water  48 μl 
Total Volume  80 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
4.3.2. Keeping the tube on ice, mix thoroughly by pipetting the reaction up and down 10 times. 
4.3.3. Incubate in a thermal cycler for 1 hour at 16°C with the heated lid set at ≤ 40°C (or off). Proceed to Purification of Double-stranded cDNA. 
4.4. Purification of Double-stranded cDNA Using SPRIselect Beads or NEBNext Sample Purification Beads 
4.4.1. Vortex SPRIselect Beads or NEBNext Sample Purification Beads to resuspend. 
4.4.2. Add 144 μl (1.8X) of resuspended beads to the second strand synthesis reaction (~80 μl). Mix well on a vortex mixer or by 
pipetting up and down at least 10 times. 
4.4.3. Incubate for 5 minutes at room temperature. 
4.4.4. Briefly spin the tube in a microcentrifuge to collect any sample on the sides of the tube. Place the tube on a magnetic rack to separate beads from the supernatant. After the solution is clear (about 5 minutes), carefully remove and discard the supernatant. Be careful not to disturb the beads, which contain DNA. (Caution: do not discard beads). 
4.4.5. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic rack. Incubate at room temperature for 30 seconds, and then carefully remove and discard the supernatant. 
4.4.6. Repeat Step 4.4.5. once for a total of 2 washing steps. 
4.4.7. Air dry the beads for up to 5 minutes while the tube is on the magnetic rack with lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
4.4.8. Remove the tube from the magnetic rack. Elute the DNA from the beads by adding 53 μl 0.1X TE Buffer (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down several times. Quickly spin the tube and incubate for 2 minutes at room temperature. Place the tube on the magnetic rack until the solution is clear (about 2 minutes). 
4.4.9. Remove 50 μl of the supernatant and transfer to a clean nuclease free PCR tube. 43 
Note: If you need to stop at this point in the protocol samples can be stored at –20°C. 
4.5. End Prep of cDNA Library 
4.5.1. Assemble the end prep reaction on ice by adding the following components to the second strand synthesis product from Step 4.4.9. 
END PREP REACTION  VOLUME 
Second Strand Synthesis Product (Step 4.4.9.)  50 μl 
# • (green) NEBNext Ultra II End Prep Reaction Buffer  7 μl 
# • (green) NEBNext Ultra II End Prep Enzyme Mix  3 μl 
Total Volume  60 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. If a master mix is made, add 10 μl of master mix to 50 μl of cDNA for the End Prep reaction. 
4.5.2. Set a 100 μl or 200 μl pipette to 50 μl and then pipette the entire volume up and down at least 10 times to mix thoroughly. 
Perform a quick spin to collect all liquid from the sides of the tube. 
Note: It is important to mix well. The presence of a small amount of bubbles will not interfere with performance. 
4.5.3. Incubate the sample in a thermal cycler with the heated lid set at ≥ 75°C as follows: 
30 minutes at 20°C 
30 minutes at 65°C 
Hold at 4°C 
Proceed immediately to Adaptor Ligation. 
4.6. Adaptor Ligation 
4.6.1. Dilute the  • (red) NEBNext Adaptor* prior to setting up the ligation reaction in ice-cold Adaptor Dilution Buffer and keep the diluted adaptors on ice. 
PURIFIED RNA  DILUTION REQUIRED 
100 –11 ng  5-fold dilution in Adaptor Dilution Buffer 
10 –1 ng  25-fold dilution in Adaptor Dilution Buffer  
> *The NEBNext adaptor is provided in NEBNext oligos kit. NEB has several oligo kit options, which are supplied separately from the library prep kit.
4.6.2. Assemble the ligation reaction on ice by adding the following components, in the order given, to the end prep reaction product from Step 4.5.3.: 
LIGATION REACTION  VOLUME 
End Prepped DNA (Step 4.5.3.)  60 μl 
Diluted Adaptor (Step 4.6.1.)  2.5 μl 
# • (red) NEBNext Ligation Enhancer  1 μl 
# • (red) NEBNext Ultra II Ligation Master Mix  30 μl 
Total Volume  93.5 μl 
The Ligation Master Mix and Ligation Enhancer can be mixed ahead of time and is stable for at least 8 hours at 4°C. Do not premix the Ligation Master Mix, Ligation Enhancer and adaptor prior to use in the Adaptor Ligation Step. 44 
4.6.3. Set a 100 μl or 200 μl pipette to 80 μl and then pipette the entire volume up and down at least 10 times to mix thoroughly. 
Perform a quick spin to collect all liquid from the sides of the tube. 
Caution: The NEBNext Ultra II Ligation Master Mix is very viscous. Care should be taken to ensure adequate mixing of the ligation reaction, as incomplete mixing will result in reduced ligation efficiency. The presence of a small amount of bubbles will not interfere with performance. 
4.6.4. Incubate 15 minutes at 20°C in a thermal cycler with the heated lid off. 
4.6.5. Add 3 μl (blue or red) USER Enzyme to the ligation mixture from Step 4.6.4. , resulting in total volume of 96.5 μl. 
4.6.6. Mix well and incubate at 37°C for 15 minutes with the heated lid set to ≥ 45°C , hold at 4°C. Proceed immediately to Purification of the Ligation Reaction. 
4.7. Purification of the Ligation Reaction Using SPRIselect Beads or NEBNext Sample Purification Beads 
Note: If you are selecting for larger size fragments (> 200 nt) follow the size selection recommendations in Appendix A, Section 6. 
4.7.1. Add 87 μl (0.9X) resuspended SPRIselect Beads or NEBNext Sample Purification Beads and mix well on a vortex mixer or by pipetting up and down at least 10 times. 
4.7.2. Incubate for 10 minutes at room temperature. 
4.7.3. Quickly spin the tube in a microcentrifuge and place the tube on an appropriate magnetic rack to separate beads from the supernatant. After the solution is clear (about 5 minutes), discard the supernatant that contain unwanted fragments (Caution: do not discard beads). 
4.7.4. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic rack. Incubate at room temperature for 30 seconds, and then carefully remove and discard the supernatant. 
4.7.5. Repeat Step 4.7.4. once for a total of 2 washing steps. 
4.7.6. Briefly spin the tube and put the tube back in the magnetic rack. 
4.7.7. Completely remove the residual ethanol and air dry beads for up to 5 minutes while the tube is on the magnetic rack with the lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
4.7.8. Remove the tube from the magnet. Elute DNA target from the beads by adding 17 μl 0.1X TE (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down several times, and incubate for 2 minutes at room temperature. Put the tube in the magnetic rack until the solution is clear (about 2 minutes),. 
4.7.9. Without disturbing the bead pellet, transfer 15 μl of the supernatant to a clean PCR tube and proceed to PCR enrichment. 
Note: If you need to stop at this point in the protocol samples can be stored at –20°C. 
4.8. PCR Enrichment of Adaptor Ligated DNA 
Use Option A for any NEBNext oligos kit where index primers are supplied in tubes. These kits have the forward and reverse primers supplied in separate tubes. 
Use Option B for any NEBNext oligos kit where index primers are supplied in a 96-well plate format. These kits have the forward and reverse (i7 and i5) primers combined. Primers are supplied at 10 μM combined (5 μM each). 
4.8.1. Set up the PCR reaction as described below based on the type of oligos (PCR primers) used. 45 
4.8.1A. Forward and Reverse Primers Separate 
COMPONENT  VOLUME PER ONE LIBRARY 
Adaptor Ligated DNA (Step 4.7.9.)  15 μl 
# • (blue) NEBNext Ultra II Q5 Master Mix  25 μl 
Index (X) Primer/i7 Primer *, **  5 μl 
Universal PCR Primer/i5 Primer *,**  5 μl 
Total Volume  50 μl   
> *NEBNext Oligos must be purchased separately from the library prep kit. Refer to the corresponding NEBNext Oligo kit manual for determining valid barcode combinations.
> ** Use only one i7 primer/ index primer per sample. Use only one i5 primer (or the universal primer for single index kits) per sample
4.8.1B. Forward and Reverse Primers Combined 
COMPONENT  VOLUME PER ONE LIBRARY 
Adaptor Ligated DNA (Step 4.7.9.)  15 μl 
# • (blue) NEBNext Ultra II Q5 Master Mix  25 μl 
Index Primer Mix*  10 μl 
Total Volume  50 μl  
> *NEBNext Oligos must be purchased separately from the library prep kit. Refer to the corresponding NEBNext Oligo kit manual for determining valid barcode combinations.
4.8.2. Mix well by gently pipetting up and down 10 times. Quickly spin the tube in a microcentrifuge. 
4.8.3. Place the tube on a thermal cycler with the heated lid set to 105°C and perform PCR amplification using the following PCR cycling conditions (refer to Table 4.8.3A. and Table 4.8.3B.): 
Table 4.8.3A: 
CYCLE STEP  TEMP  TIME  CYCLES 
Initial Denaturation  98°C  30 seconds  1
Denaturation  98°C  10 seconds  6–13 *, ** 
Annealing/Extension  65°C  75 seconds 
Final Extension  65°C  5 minutes  1
Hold  4°C  ∞  
> *The number of PCR cycles should be adjusted based on RNA input.
> ** It is important to limit the number of PCR cycles to avoid overamplification. If overamplification occurs, a second peak ~ 1,000 bp will appear on the Bioanalyzer trace (See Figure 7.2 in the Troubleshooting Guide, Section 7).
Table 4.8.3B: Recommended PCR cycles based on input amount: 
PURIFIED mRNA or rRNA DEPLETED RNA (QUANTIFIED AFTER PURIFICATION) 
RECOMMENDED PCR CYCLES 
100 ng  6–7
50 ng  7–8
10 ng  9–10 
1 ng  12 –13 
Note: PCR cycles are recommended based on high quality Universal Human Reference Total RNA. It may require optimization based on the sample quality to prevent PCR over-amplification. 46 
4.9. Purification of the PCR Reaction using SPRIselect Beads or NEBNext Sample Purification Beads 
4.9.1. Vortex SPRIselect Beads or NEBNext Sample Purification Beads to resuspend. 
4.9.2. Add 45 μl (0.9X) of resuspended beads to the PCR reaction (~ 50 μl). Mix well on a vortex mixer or by pipetting up and down 
at least 10 times. 
4.9.3. Incubate for 5 minutes at room temperature. 
4.9.4. Quickly spin the tube in a microcentrifuge and place the tube on an appropriate magnetic rack to separate beads from the supernatant. After the solution is clear (about 5 minutes), carefully remove and discard the supernatant. Be careful not to disturb the beads that contain DNA targets. (Caution: do not discard beads). 
4.9.5. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic rack. Incubate at room temperature for 30 seconds, and then carefully remove and discard the supernatant. 
4.9.6. Repeat Step 4.9.5. once for a total of 2 washing steps. 
4.9.7. Air dry the beads for up to 5 minutes while the tube is on the magnetic rack with the lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
4.9.8. Remove the tube from the magnetic rack. Elute the DNA target from the beads by adding 23 μl 0.1X TE (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down several times. Quickly spin the tube in a microcentrifuge and incubate for 2 minutes at room temperature. Place the tube in the magnetic rack until the solution is clear (about 2 minutes). 
4.9.9. Transfer 20 μl of the supernatant to a clean PCR tube. 
Note: At this point in the protocol the samples can be stored at –20°C. 
4.10. Assess Library Quality on an Agilent Bioanalyzer DNA Chip 
4.10.1. Run 1 μl library on a DNA 1000 chip. If the library yield is too low to quantify on this chip, please run the samples on a DNA High Sensitivity chip. A dilution may be necessary for running on a Bioanalyzer High Sensitivity DNA Chip. 
4.10.2. Check that the electropherogram shows a narrow distribution with a peak size approximately 300 bp. 
Note: If a peak at ~ 80 bp (primers) or 128 bp (adaptor-dimer) is visible in the Bioanalyzer traces; Bring up the sample volume (from Step 4.9.9. ) to 50 μl with 0.1X TE buffer and repeat the SPRIselect Bead or NEBNext Sample Purification 
Bead Cleanup Step (Section 4.9.). Adaptor dimer peak range is derived from values observed on Bioanalyzer. Peaks may appear shifted on other library analysis instruments such as TapeStation or Fragment Analyzer 
Figure 4.10.2 Example of RNA library size distribution on a Bioanalyzer. 47 
# Section 5 Protocol for use with rRNA Depleted FFPE RNA, Non -Indexed Adaptor and NEBNext Ultra II Directional RNA Library Prep Kit for Illumina (NEB #E7760, E7765) 
Symbols 
This caution sign signifies a step in the protocol that has two paths leading to the same end point but is dependent on a user variable, like the type of RNA input. 
This is a point where you can safely stop the protocol and store the samples prior to proceeding to the next step in the protocol. 
# •
Colored bullets indicate the cap color of the reagent to be added. 
The protocol has been optimized using fragmented high quality Universal Human Reference Total RNA and FFPE RNA. 
RNA Sample Requirements 
This Section can be used for libraries without any enrichment or depletion of total RNA with RIN scores 1 –2. 
RNA Integrity: 
RNA Integrity Number (RIN) is computed using ribosomal RNA (rRNA) amount in the sample. If rRNA is removed by any method, the RIN value should not be used to evaluate the integrity of the RNA sample. The following recommendation apply to the total RNA samples only. 
Assess the quality of the input RNA by running the RNA sample on an Agilent Bioanalyzer RNA 6000 Nano/Pico Chip to determine the RNA Integrity Number (RIN). RNA with different RIN values require different fragmentation times or no fragmentation at all. 
For intact (RIN > 7) or partially degraded RNA samples (RIN = 2 to 7) follow the library preparation protocol in Section 4. 
For highly degraded samples (RIN = 1 to 2) (e.g. FFPE), which does not require fragmentation, follow the library preparation protocol in Section 5 (current Section). 
RNA Sample Requirements: 
The RNA sample should be free of salts (e.g., Mg 2+ , or guanidinium salts, divalent cation chelating agents (e.g., EDTA or EGTA) or organics (e.g., phenol or ethanol). RNA must be free of DNA. gDNA is a common contaminant from RNA preps. It may be carried over from the interphase of organic extractions or when the silica matrix of solid phase RNA purification methods is overloaded. If the total RNA sample may contain gDNA contamination, treat the sample with DNase I to remove all traces of DNA (DNase is not provided in this kit). After treatment with DNase I the enzyme should be removed from the sample. DNase I can be removed from the extraction using phenol/chloroform extraction and ethanol precipitation. 
Starting Material 
1–100 ng alternative rRNA depleted FFPE RNA that is quantified after rRNA depletion. RNA should be DNA free in up to 5 μl of 
Nuclease-free Water, quantified by Qubit Fluorometer and quality checked by Bioanalyzer. 
5.1. Priming of Highly Degraded RNA (FFPE) Which has a RIN ≤ 2 and does not Require Fragmentation 
5.1.1. Assemble the Priming Reaction on ice by adding the following components: 
PRIMING REACTION  VOLUME 
rRNA Depleted FFPE RNA (1 –100 ng)  5 μl 
# • (lilac) Random Primers  1 μl 
Total Volume  6 μl 
5.1.2. Mix thoroughly by pipetting up and down 10 times. 48 
5.1.3. Briefly spin down the samples in a microcentrifuge. 
5.1.4. Incubate the sample in a preheated thermal cycler as follows. 
5 minutes at 65°C, with heated lid set at 105°C 
Hold at 4°C 
5.1.5. Transfer the tube directly to ice and proceed to First Strand cDNA Synthesis. 
5.2. First Strand cDNA Synthesis 
5.2.1. Assemble the first strand synthesis reaction on ice by adding the following components: 
FIRST STRAND SYNTHESIS REACTION  VOLUME 
Primed RNA (Step 5.1.5.)  6 μl 
# • (lilac) NEBNext First Strand Synthesis Reaction Buffer  4 μl 
# • (brown) NEBNext Strand Specificity Reagent  8 μl 
# • (lilac) NEBNext First Strand Synthesis Enzyme Mix  2 μl 
Total Volume  20 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
5.2.2. Keeping the tube on ice, mix thoroughly by pipetting up and down 10 times. 
5.2.3. Incubate the sample in a preheated thermal cycler with the heated lid set at ≥ 80°C as follows: 
Step 1: 10 minutes at 25°C 
Step 2: 15 minutes at 42°C 
Step 3: 15 minutes at 70°C 
Step 4: Hold at 4°C 
Proceed directly to Second Strand cDNA Synthesis. 
5.3. Second Strand cDNA Synthesis 
5.3.1 Assemble the second strand cDNA synthesis reaction on ice by adding the following components to the first strand reaction product from Step 5.2.3.: 
SECOND STRAND SYNTHESIS REACTION  VOLUME 
First-Strand Synthesis Product (Step 5.2.3.)  20 μl 
# • (orange) NEBNext Second Strand Synthesis Reaction Buffer with dUTP Mix  8 μl 
# • (orange) NEBNext Second Strand Synthesis Enzyme Mix  4 μl 
Nuclease-free Water  48 μl 
Total Volume  80 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. 
5.3.2 Keeping the tube on ice, mix thoroughly by pipetting up and down several times. 
5.3.3 Incubate in a thermal cycler for 1 hour at 16°C with the heated lid set at ≤ 40°C (or off). Proceed to Purification of Double-stranded cDNA. 
5.4. Purification of Double-stranded cDNA Using SPRIselect Beads or NEBNext Sample Purification Beads 
5.4.1. Vortex SPRIselect Beads or NEBNext Sample Purification Beads to resuspend. 
5.4.2. Add 144 μl (1.8X) of resuspended beads to the second strand synthesis reaction (~80 μl). Mix well on a vortex mixer or by 
pipetting up and down at least 10 times. 
5.4.3. Incubate for 5 minutes at room temperature. 49 
5.4.4. Briefly spin the tube in a microcentrifuge to collect any sample on the sides of the tube. Place the tube on a magnetic rack to separate beads from the supernatant. After the solution is clear (about 5 minutes), carefully remove and discard the supernatant. Be careful not to disturb the beads, which contain DNA. (Caution: do not discard beads) .
5.4.5. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic rack. Incubate at room temperature for 30 seconds, and then carefully remove and discard the supernatant. 
5.4.6. Repeat Step 5.4.5. once for a total of 2 washing steps. 
5.4.7. Air dry the beads for up to 5 minutes while the tube is on the magnet with lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
5.4.8. Remove the tube from the magnet. Elute the DNA from the beads by adding 53 μl 0.1X TE Buffer (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down 10 times. Quickly spin the tube and incubate for 2 minutes at room temperature. Place the tube on the magnetic rack until the solution is clear (about 2 minutes). 
5.4.9. Remove 50 μl of the supernatant and transfer to a clean nuclease free PCR tube. 
Note: If you need to stop at this point in the protocol samples can be stored at –20°C. 
5.5. End Prep of cDNA Library 
5.5.1. Assemble the end prep reaction on ice by adding the following components to the second strand synthesis product from Step 5.4.9. 
END PREP REACTION  VOLUME 
Second Strand Synthesis Product (Step 5.4.9.)  50 μl 
# • (green) NEBNext Ultra II End Prep Reaction Buffer  7 μl 
# • (green) NEBNext Ultra II End Prep Enzyme Mix  3 μl 
Total Volume  60 μl 
For multiple reactions, a master mix of the reaction components can be prepared on ice before addition to the sample. If a master mix is made, add 10 μl of master mix to 50 μl of cDNA for the End Prep reaction. 
5.5.2. Set a 100 μl or 200 μl pipette to 50 μl and then pipette the entire volume up and down at least 10 times to mix thoroughly. 
Perform a quick spin to collect all liquid from the sides of the tube. 
Note: It is important to mix well. The presence of a small amount of bubbles will not interfere with performance. 
5.5.3. Incubate the sample in a thermal cycler with the heated lid set at ≥ 75°C as follows. 
30 minutes at 20°C 
30 minutes at 65°C 
Hold at 4°C. 
Proceed immediately to Adaptor Ligation. 
5.6. Adaptor Ligation 
5.6.1. Dilute the  • (red) NEBNext Adaptor* prior to setting up the ligation reaction in ice-cold Adaptor Dilution Buffer and keep the diluted adaptor on ice. 
PURIFIED RNA  DILUTION REQUIRED 
100 –11 ng  5-fold dilution in Adaptor Dilution Buffer 
10 –1 ng  25-fold dilution in Adaptor Dilution Buffer  
> *The NEBNext adaptor is provided in NEBNext oligos kit. NEB has several oligo kit options, which are supplied separately from the library prep kit.
# 50 
5.6.2. Assemble the ligation reaction on ice by adding the following components, in the order given, to the end prep reaction product from Step 5.5.3. 
LIGATION REACTION  VOLUME 
End Prepped DNA (Step 5.5.3.)  60 μl 
Diluted Adaptor (Step 5.6.1.)  2.5 μl 
# • (red) NEBNext Ligation Enhancer  1 μl 
# • (red) NEBNext Ultra II Ligation Master Mix  30 μl 
Total Volume  93.5 μl 
Note: The Ligation Master Mix and Ligation Enhancer can be mixed ahead of time and is stable for at least 8 hours at 4°C. Do not premix the Ligation Master Mix, Ligation Enhancer and adaptor prior to use in the Adaptor Ligation Step. 
5.6.3. Set a 100 μl or 200 μl pipette to 80 μl and then pipette the entire volume up and down at least 10 times to mix thoroughly. 
Perform a quick spin to collect all liquid from the sides of the tube. 
Caution: The NEBNext Ultra II Ligation Master Mix is very viscous. Care should be taken to ensure adequate mixing of the ligation reaction, as incomplete mixing will result in reduced ligation efficiency. The presence of a small amount of bubbles will not interfere with performance. 
5.6.4. Incubate 15 minutes at 20°C in a thermal cycler with the heated lid off. 
5.6.5. Add 3 μl (blue or red) USER Enzyme to the ligation mixture from Step 5.6.4. , resulting in total volume of 96.5 μl. 
5.6.6. Mix well and incubate at 37°C for 15 minutes with the heated lid set to ≥ 45°C , hold at 4°C. Proceed immediately to Purification of Ligation Reaction. 
5.7. Purification of Ligation Reaction Using SPRIselect Beads or NEBNext Sample Purification Beads 
5.7.1. Add 87 μl (0.9X) resuspended SPRIselect Beads or NEBNext Sample Purification Beads and mix well on a vortex mixer or by 
pipetting up and down at least 10 times. 
5.7.2. Incubate for 10 minutes at room temperature. 
5.7.3. Quickly spin the tube in a microcentrifuge and place the tube on an appropriate magnetic rack to separate beads from the supernatant. After the solution is clear (about 5 minutes), discard the supernatant that contains unwanted fragments. (Caution: do not discard beads) .
5.7.4. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic rack. Incubate at room temperature for 30 second s, and then carefully remove and discard the supernatant. 
5.7.5. Repeat Step 5.7.4. once for a total of 2 washing steps. 
5.7.6. Briefly spin the tube and put the tube back in the magnetic rack. 
5.7.7. Completely remove the residual ethanol and air dry beads for up to 5 minutes while the tube is on the magnetic rack with the lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
5.7.8. Remove the tube from the magnetic rack. Elute DNA target from the beads by adding 17 μl 0.1X TE (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down 10 times. Quickly spin the tube and incubate for 2 minutes at room temperature. Put the tube on the magnet until the solution is clear (about 2 minutes). 
5.7.9. Without disturbing the bead pellet, transfer 15 μl of the supernatant to a clean PCR tube and proceed to PCR enrichment. 
Note: If you need to stop at this point in the protocol samples can be stored at –20°C. 51 
5.8. PCR Enrichment of Adaptor Ligated DNA 
Use Option A for any NEBNext oligos kit where index primers are supplied in tubes. These kits have the forward and reverse primers supplied in separate tubes. 
Use Option B for any NEBNext oligos kit where index primers are supplied in a 96-well plate format. These kits have the forward and reverse (i7 and i5) primers combined. Primers are supplied at 10 μM combined (5 μM each). 
5.8.1. Set up the PCR reaction as described below based on the type of oligos (PCR primers) used. 
5.8.1A. Forward and Reverse Primers Separate 
COMPONENT  VOLUME PER ONE LIBRARY 
Adaptor Ligated DNA (Step 5.7.9.)  15 μl 
# • (blue) NEBNext Ultra II Q5 Master Mix  25 μl 
Index (X) Primer/i7 Primer *, **  5 μl 
Universal PCR Primer/i5 Primer *,**  5 μl 
Total Volume  50 μl   
> *NEBNext Oligos must be purchased separately from the library prep kit. Refer to the corresponding NEBNext Oligo kit manual for determining valid barcode combinations.
> ** Use only one i7 primer/ index primer per sample. Use only one i5 primer (or the universal primer for single index kits) per sample
5.8.1B. Forward and Reverse Primers Combined 
COMPONENT  VOLUME PER ONE LIBRARY 
Adaptor Ligated DNA (Step 5.7.9.)  15 μl 
# • (blue) NEBNext Ultra II Q5 Master Mix  25 μl 
Index Primer Mix * 10 μl 
Total Volume  50 μl  
> *NEBNext Oligos must be purchased separately from the library prep kit. Refer to the corresponding NEBNext Oligo kit manual for determining valid barcode combinations.
5.8.2. Mix well by gently pipetting up and down 10 times. Quickly spin the tube in a microcentrifuge. 
5.8.3. Place the tube on a thermal cycler with the heated lid set to 105°C and perform PCR amplification using the following PCR cycling conditions (refer to Table 5.8.3A and Table 5.8.3B): 
Table 5.8.3A: 
CYCLE STEP  TEMP  TIME  CYCLES 
Initial Denaturation  98°C  30 seconds  1
Denaturation  98°C  10 seconds  7–13 *, ** 
Annealing/Extension  65°C  75 seconds 
Final Extension  65°C  5 minutes  1
Hold  4°C  ∞
* The number of PCR cycles should be adjusted based on RNA input. The recommendation of PCR cycles has been optimized using fragmented UHR and FFPE RNA. 
** It is important to limit the number of PCR cycles to avoid overamplification. If overamplification occurs, a second peak ~ 1,000 bp will appear on the Bioanalyzer trace (See Figure 7.2 in the Troubleshooting Guide, Section 7). 52 
Table 5.8.3B: Recommended PCR cycles based on input amount: 
rRNA DEPLETED FFPE RNA (QUANTIFIED AFTER rRNA PURIFICATION) 
RECOMMENDED PCR CYCLES 
100 ng  7–8
50 ng  8–9
10 ng  10 –11 
1 ng  13 –14 
Note: The recommendation of PCR cycles has been optimized using fragmented UHR and FFPE RNA. It may require optimization based on the sample quality to prevent PCR over-amplification. 
5.9. Purification of the PCR Reaction using SPRIselect Beads or NEBNext Sample Purification Beads 
5.9.1. Vortex SPRIselect Beads or NEBNext Sample Purification Beads to resuspend. 
5.9.2. Add 45 μl (0.9X) of resuspended beads to the PCR reaction (~ 50 μl). Mix well on a vortex mixer or by pipetting up and down 
at least 10 times. 
5.9.3. Incubate for 5 minutes at room temperature. 
5.9.4. Quickly spin the tube in a microcentrifuge and place the tube on an appropriate magnetic rack to separate beads from the supernatant. After the solution is clear (about 5 minutes), carefully remove and discard the supernatant. Be careful not to disturb the beads that contain DNA targets. 
5.9.5. Add 200 μl of freshly prepared 80% ethanol to the tube while in the magnetic rack. Incubate at room temperature for 30 seconds, and then carefully remove and discard the supernatant. 
5.9.6. Repeat Step 5.9.5. once for a total of 2 washing steps. 
5.9.7. Air dry the beads for up to 5 minutes while the tube is on the magnetic rack with the lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
5.9.8. Remove the tube from the magnetic rack. Elute the DNA target from the beads by adding 23 μl 0.1X TE (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down 10 times. Quickly spin the tube in a microcentrifuge and incubate for 2 minutes at room temperature. Place the tube on the magnetic rack until the solution is clear (about 2 minutes). 
5.9.9. Transfer 20 μl of the supernatant to a clean PCR tube. 
Note: At this point in the protocol samples can be stored at –20°C. 53 
5.10.Assess Library Quality on an Agilent Bioanalyzer DNA Chip 
5.10.1. Run 1 μl library on a DNA High Sensitivity Chip. A dilution may be necessary for running on a Bioanalyzer High Sensitivity DNA Chip. 
5.10.2. Check that the electropherogram shows a narrow distribution with a peak size approximately 300 bp. 
Note: If a peak at ~ 80 bp (primers) or 128 bp (adaptor-dimer) is visible in the Bioanalyzer traces, bring up the sample volume (from Step 5.9.9. ) to 50 μl with 0.1X TE Buffer and repeat the SPRIselect Bead or NEBNext Sample Purification 
Bead Cleanup Step (Section 5.9.). Adaptor dimer peak range is derived from values observed on Bioanalyzer. Peaks may appear shifted on other library analysis instruments such as TapeStation or Fragment Analyzer. 
Figure 5.10.2. Example of FFPE RNA library size distribution on a Bioanalyzer. 
# Section 6 Appendix A 
6.1. Fragmentation 
Note: These recommendations have been optimized using Universal Human Reference Total RNA. Other types of RNA may require different fragmentation times. 
Figure 6.1. Modified fragmentation times for longer RNA inserts.    
> Red Ladder
> Blue 150 –300 bp, mRNA fragmented for 15 minutes at 94°C
> Green 200 –500 bp mRNA fragmented for 10 minutes at 94°C
> Cyan 400 –1,000 bp mRNA fragmented for 5 minutes at 94°C
Modified fragmentation times for longer RNA inserts. Bioanalyzer traces of RNA as shown in an RNA Pico Chip. mRNA isolated from Universal Human Reference RNA and fragmented with First Strand Synthesis Reaction Buffer and Random Primer Mix (2X) at 94°C for 5, 10 or 15 minutes, and purified using 2.2X volume of Agencourt ® RNAClean ® XP Beads. For libraries with RNA insert sizes larger than 300 bp, fragment RNA between 5 –10 minutes and remember to increase the incubation at 42°C from 15 to 50 minutes during the first strand cDNA synthesis reaction in Sections 1, 2 and 4. 54 
6.2. Size Selection of Adaptor Ligated DNA 
Note: Size selection should be done after adaptor ligation and USER digestion. 
The size selection protocol is based on a starting volume of 96.5 μl. Size selection conditions were optimized with 
SPRIselect Beads and NEBNext Sample Purification Beads; however, AMPure XP Beads can be used following the same conditions. If using Ampure XP Beads, please allow the beads to warm to room temperature for at least 30 minutes before use. 
Please adjust recommended bead volumes for each target size according to Table 6.2. The protocol below is for libraries with a 300 bp insert size (420 bp final library size). 
Table 6.2: Recommended size selection conditions for libraries with insert sizes larger than 300 bp. 
Note: Size selection for < 100 ng total RNA input is not recommended. 
LIBRARY PARAMETER 
APPROXIMATE INSERT SIZE  300 bp  400 bp  450 bp 
Approx. Final Library Size  420 bp  520 bp  570 bp 
BEAD VOLUME TO BE ADDED (μl) 
1st Bead Selection  25  20  15 
2nd Bead Selection  10  10  10 
Note: Any differences in insert sizes between the Agilent Bioanalyzer and that obtained from paired end sequencing can be attributed to the higher clustering efficiency of smaller sized fragments. 
6.2.1. Vortex SPRIselect Beads or NEBNext Sample Purification Beads to resuspend. 
6.2.2. Add 25 μl of resuspended beads to the 96.5 μl ligation reaction. Mix well by pipetting up and down at least 10 times. 
6.2.3. Incubate for 5 minutes at room temperature .
6.2.4. Place the tube on an appropriate magnetic rack to separate the beads from the supernatant. If necessary, quickly spin the sample to collect the liquid from the sides of the tube or plate wells before placing on the magnetic rack. After the solution is clear (about 5 minutes), carefully transfer the supernatant containing your DNA to a new tube (Caution: do not discard the supernatant). Discard the beads that contain the unwanted large fragments. 
6.2.5. Add 10 μl resuspended beads to the supernatant, mix well by pipetting up and down at least 10 times and incubate for 5 minutes at room temperature. 
6.2.6. Place the tube/plate on an appropriate magnetic rack to separate the beads from the supernatant. If necessary, quickly spin the sample to collect the liquid from the sides of the tube or plate wells before placing on the magnetic rack. After the solution is clear (about 5 minutes), carefully remove and discard the supernatant that contains unwanted DNA. Be careful not to disturb the beads that contain the desired DNA targets (Caution: do not discard beads). 
6.2.7. Add 200 μl of 80% freshly prepared ethanol to the tube while in the magnetic rack. Incubate at room temperature for 30 seconds, and then carefully remove and discard the supernatant. 
6.2.8. Repeat Step 6.2.7. once for a total of 2 washes. 
6.2.9. Air dry the beads for up to 5 minutes while the tube/plate is on the magnetic rack with the lid open. 
Caution: Do not over-dry the beads. This may result in lower recovery of DNA target. Elute the samples when the beads are still dark brown and glossy looking, but when all visible liquid has evaporated. When the beads turn lighter brown and start to crack they are too dry. 
6.2.10. Remove the tube/plate from the magnetic rack. Elute the DNA target from the beads by adding 17 μl of 0.1 X TE (provided) to the beads. Mix well on a vortex mixer or by pipetting up and down 10 times. Quickly spin the tube and incubate for 2 minutes at room temperature .
6.2.11. Place the tube on a magnetic rack. After the solution is clear (about 2 minutes), transfer 15 μl to a new PCR tube for amplification. 
Note: If you need to stop at this point in the protocol samples can be stored at –20°C. 55 
6.3. PCR Enrichment of Size-selected Libraries 
Note: Size-selected libraries require 2 additional PCR cycles due to loss during size selection steps compared to non-size-selected libraries. 
Use Option A for any NEBNext oligos kit where index primers are supplied in tubes. These kits have the forward and reverse primers supplied in separate tubes. 
Use Option B for any NEBNext oligos kit where index primers are supplied in a 96-well plate format. These kits have the forward and reverse (i7 and i5) primers combined. Primers are supplied at 10 μM combined (5 μM each). 
6.3.1. Set up the PCR reaction as described below based on the type of oligos (PCR primers) used. 
6.3.1A. Forward and Reverse Primers Separate 
COMPONENT  VOLUME PER ONE LIBRARY 
Adaptor Ligated DNA (Step 6.2.11.)  15 μl 
# • (blue) NEBNext Ultra II Q5 Master Mix  25 μl 
Universal PCR Primer/i5 Primer *,**  5 μl 
Index (X) Primer/i7 Primer *, **  5 μl 
Total Volume  50 μl   
> *NEBNext Oligos must
be purchased separately from the library prep kit. Refer to the corresponding NEBNext Oligo kit manual for determining valid barcode combinations. 
** Use only one i7 primer/ index primer per sample. Use only one i5 primer (or the universal primer for single index kits) per sample 
6.3.1B. Forward and Reverse Primers Combined 
COMPONENT  VOLUME PER ONE LIBRARY 
Adaptor Ligated DNA (Step 6.2.11.)  15 μl 
# • (blue) NEBNext Ultra II Q5 Master Mix  25 μl 
Index (X) Primer/i7 Primer Mix * 10 μl 
Total Volume  50 μl 
* NEBNext Oligos must be purchased separately from the library prep kit. Refer to the corresponding NEBNext Oligo kit manual for determining valid barcode combinations. 
** Use only one i7 primer/ index primer per sample. Use only one i5 primer (or the universal primer for single index kits) per sample 
6.3.2. Mix well by gently pipetting up and down 10 times. Quickly spin the tube in a microcentrifuge. 
6.3.3. Place the tube in a thermal cycler with the heated lid set to 105°C. Perform PCR amplification using the following PCR cycling conditions: 
CYCLE STEP  TEMP  TIME  CYCLES 
Initial Denaturation  98°C  30 seconds  1
Denaturation  98°C  10 seconds  variable *, ** 
Annealing/Extension  65°C  75 seconds 
Final Extension  65°C  5 minutes  1
Hold  4°C  ∞ 
> *The number of PCR cycles should be adjusted based on RNA input. Size-selected libraries require additional 2 PCR cycles and should be adjusted accordingly. For example if a non-size selected library requires 8 PCR cycles, the size-selected library should be amplified for 10 cycles (8 + 2) after the size selection.
> ** It is important to limit the number of PCR cycles to avoid overamplification. If overamplification occurs, a second peak ~ 1,000 bp will appear on the Bioanalyzer trace (See Figure 7.2 in the Troubleshooting Guide, Section 7).
# 56 
Perform the step “ Purification of the PCR Reaction using SPRIselect Beads or NEBNext Sample Purification Beads ”
from your respective chapter. 
Figure 6.3: Bioanalyzer traces of size selected DNA libraries. 
50 ng mRNA was fragmented with First Strand Synthesis Reaction Buffer and Random Primer Mix (2X) at 94°C for 10 or 5 minutes. Libraries were size-selected as described in Table 6.2, then amplified by PCR, and run on Agilent Bioanalyzer DNA 1000 chip. Fragmentation times and corresponding size selection conditions are shown in the table below. 
Table 6.3: 
LIBRARY SAMPLE  FRAGMENTATION TIME 
1st BEAD SELECTION 
2nd BEAD SELECTION 
Red  10 minutes  25 μl  10 μl 
Blue  5 minutes  20 μl  10 μl 
Green  5 minutes  15 μl  10 μl 
For libraries with longer inserts (> 200 bp), remember to increase the incubation at 42°C from 15 to 50 minutes during the First Strand cDNA Synthesis reaction. 57 
# Section 7 Troubleshooting Guide 
OBSERVATIONS  POSSIBLE CAUSES  EFFECT  SUGGESTED SOLUTIONS 
Presence of Bioanalyzer peaks < 85 bp (Figure 7.1) 
• Presence of primers remaining after PCR clean up 
Primers cannot cluster or be sequenced, but can bind to flowcell and reduce cluster density 
• Clean up PCR reaction again with 0.9X SPRIselect Beads or NEBNext Sample Purification Beads (second clean up may result in reduction of library yield) 
Presence of ~127 –140 bp adaptor-dimer Bioanalyzer peak (Figure 7.1) 
• Addition of non-diluted adaptor 
• RNA input was too low 
• RNA was over fragmented or lost during fragmentation 
• Inefficient Ligation 
Adaptor-dimer will cluster and be sequenced. If ratio is low compared to library, may not be a problem but some reads will be dimers 
• Dilute adaptor before setting up ligation reaction 
• Clean up PCR reaction again with 
0.9X SPRIselect Beads or NEBNext Sample Purification Beads (second clean up may result in reduction of library yield) 
Presence of additional Bioanalyzer peak at higher molecular weight than the expected library size (~ 1,000 bp) (Figure 7.2) 
• PCR artifact (over-amplification). Represents single-stranded library products that have self-annealed. If the PCR cycle number (or PCR input amount) is too high; in the late cycles of PCR the primers become limiting. Therefore, the adaptor sequences on either end of the fragment anneal to each other. This creates heteroduplexes with different insert sequences that run slower in the Bioanalyzer. 
If ratio is low compared to library, may not be a problem for sequencing 
• Reduce number of PCR cycles 
Broad library size distribution 
• Under-fragmentation of the RNA 
Library size will contain longer insert sizes 
• Increase RNA fragmentation time 58 
Figure 7.1: 
Figure 7.2: 59 
# Kit Components 
Each set of reagents is functionally validated and compared to the previous lot through construction of libraries using the minimum and maximum amount of Universal Human Reference Total RNA. The previous and current lots are sequenced together on the same Illumina flow cell and compared across various sequence metrics including individual transcript abundances, 5´ → 3´ transcript coverage, and fraction of reads mapping to the reference. 
# NEB #E7760S Table of Components 
NEB #  PRODUCT  VOLUME 
E7374A  NEBNext Ligation Enhancer  0.024 ml 
E7421A  NEBNext First Strand Synthesis Reaction Buffer  0.192 ml 
E7422A  Random Primers  0.048 ml 
E7425A  NEBNext Second Strand Synthesis Enzyme Mix  0.096 ml 
E7426A  NEBNext Second Strand Synthesis Reaction Buffer with dUTP Mix 
0.192 ml 
E7428A  NEBNext USER Enzyme  0.072 ml 
E7646A  NEBNext Ultra II End Prep Enzyme Mix  0.072 ml 
E7647A  NEBNext Ultra II End Prep Reaction Buffer  0.168 ml 
E7648A  NEBNext Ultra II Ligation Master Mix  0.720 ml 
E7649A  NEBNext Ultra II Q5 Master Mix  0.6 ml 
E7761A  NEBNext First Strand Synthesis Enzyme Mix  0.048 ml 
E7762A  NEBNext Adaptor Dilution Buffer  2.4 ml 
E7763A  (0.1X) TE Buffer  2.78 ml 
E7764A  Nuclease-free Water  1.25 ml 
E7766A  NEBNext Strand Specificity Reagent  0.192 ml 
# NEB #E7760L Table of Components 
NEB #  PRODUCT  VOLUME 
E7374AA  NEBNext Ligation Enhancer  0.096 ml 
E7421AA  NEBNext First Strand Synthesis Reaction Buffer  0.768 ml 
E7422AA  Random Primers  0.192 ml 
E7425AA  NEBNext Second Strand Synthesis Enzyme Mix  0.384 ml 
E7426AA  NEBNext Second Strand Synthesis Reaction Buffer with dUTP Mix 
0.768 ml 
E7428AA  NEBNext USER Enzyme  0.288 ml 
E7646AA  NEBNext Ultra II End Prep Enzyme Mix  0.288 ml 
E7647AA  NEBNext Ultra II End Prep Reaction Buffer  0.672 ml 
E7648AA  NEBNext Ultra II Ligation Master Mix  3 x 0.960 ml 
E7649AA  NEBNext Ultra II Q5 Master Mix  2 x 1.2 ml 
E7761AA  NEBNext First Strand Synthesis Enzyme Mix  0.192 ml 
E7762AA  NEBNext Adaptor Dilution Buffer  9.6 ml 
E7763AA  (0.1X) TE Buffer  11.5 ml 
E7764AA  Nuclease-free Water  5.7 ml 
E7766AA  NEBNext Strand Specificity Reagent  0.768 ml 60 
# NEB #E7765S Table of Components 
NEB #  PRODUCT  VOLUME 
E7374A  NEBNext Ligation Enhancer  0.024 ml 
E7421A  NEBNext First Strand Synthesis Reaction Buffer  0.192 ml 
E7422A  Random Primers  0.048 ml 
E7425A  NEBNext Second Strand Synthesis Enzyme Mix  0.096 ml 
E7426A  NEBNext Second Strand Synthesis Reaction Buffer with dUTP Mix 
0.192 ml 
E7428A  NEBNext USER Enzyme  0.072 ml 
E7646A  NEBNext Ultra II End Prep Enzyme Mix  0.072 ml 
E7647A  NEBNext Ultra II End Prep Reaction Buffer  0.168 ml 
E7648A  NEBNext Ultra II Ligation Master Mix  0.720 ml 
E7649A  NEBNext Ultra II Q5 Master Mix  0.6 ml 
E7761A  NEBNext First Strand Synthesis Enzyme Mix  0.048 ml 
E7762A  NEBNext Adaptor Dilution Buffer  2.4 ml 
E7763A  (0.1X) TE Buffer  2.78 ml 
E7764A  Nuclease-free Water  1.25 ml 
E7766A  NEBNext Strand Specificity Reagent  0.192 ml 
E7767S  NEBNext Sample Purification Beads  6.65 ml 
# NEB #E7765L Table of Components 
NEB #  PRODUCT  VOLUME 
E7374AA  NEBNext Ligation Enhancer  0.096 ml 
E7421AA  NEBNext First Strand Synthesis Reaction Buffer  0.768 ml 
E7422AA  Random Primers  0.192 ml 
E7425AA  NEBNext Second Strand Synthesis Enzyme Mix  0.384 ml 
E7426AA  NEBNext Second Strand Synthesis Reaction Buffer with dUTP Mix 
0.768 ml 
E7428AA  NEBNext USER Enzyme  0.288 ml 
E7646AA  NEBNext Ultra II End Prep Enzyme Mix  0.288 ml 
E7647AA  NEBNext Ultra II End Prep Reaction Buffer  0.672 ml 
E7648AA  NEBNext Ultra II Ligation Master Mix  3 x 0.960 ml 
E7649AA  NEBNext Ultra II Q5 Master Mix  2 x 1.2 ml 
E7761AA  NEBNext First Strand Synthesis Enzyme Mix  0.192 ml 
E7762AA  NEBNext Adaptor Dilution Buffer  9.6 ml 
E7763AA  (0.1X) TE Buffer  11.5 ml 
E7764AA  Nuclease-free Water  5.7 ml 
E7766AA  NEBNext Strand Specificity Reagent  0.768 ml 
E7767L  NEBNext Sample Purification Beads  4 x 6.65 ml 61 
# Revision History 
REVISION #  DESCRIPTION  DATE 
1.0  N/A 
2.0  Updated "Kit includes" and "Required Materials not included." Updated all selection guide diagrams. Update all protocols. Update "Troubleshooting Guide." Delete FAQ Section 8. Place entire manual into new manual format. 
12/18 
2.1  Updated Table 1.9.3A.  1/19 
2.2  Updated “Materials not included”, “For use with NEBNext Ribosomal Depletion Kit”, second bullet “In NEB # E6310 ”
corrected to “In NEB #E6350” 
5/19 
3.0  Update Protocol Steps 1.9.1A and 1.9.1B, Steps 2.12.1A and 2.12.1B, 3.12.1A and 3.12.1B, 4.8.1A and 4.8.1B, 5.8.1A and 5.8.1B. 
10/19 
3.1  Updated product license information.  5/20 
4.0  Updated protocols.  4/21 
5.0  Updated protocols.  12/22 
6.0  Added DV200 recommendations. Updated protocols. Also updated header and footer with new logo, as well as legal footnote. 
7/24 
7.0  Added Section 1A #E7490 Express Protocol. Updated protocols.  4/25 
This product is intended for research purposes only. This product is not intended to be used for therapeutic or diagnostic purposes in humans or animals. 
Products and content are covered by one or more patents, trademarks and/or copyrights owned or controlled by New England Biolabs, Inc (NEB). The use of trademark symbols does not necessarily indicate that the name is trademarked in the country where it is being read; it indicates where the content was originally developed. See  www.neb.com/trademarks . The use of these products may require you to obtain additional third-party intellectual property rights for certain applications. For more information, please email  busdev@neb.com .
This product is licensed for research and commercial use from Bio-Rad Laboratories, Inc., under U.S. Pat. Nos. 6,627,424, 7,541,170, 7,670,808, 7,666,645, and corresponding patents in other countries. No rights are granted for use of the product for Digital PCR or real-time PCR applications, with the exception of quantification in Next Generation Sequencing workflows. 
This product and its use are the subject of one or more issued and/or pending U.S. and foreign patent applications owned by Max Planck Gesellschaft. The purchase of this product from New England Biolabs, Inc., its affiliates, or its authorized resellers and distributors conveys to the buyer the non-transferable right to use the purchased amount of the product and components of the product in research conducted by the buyer (whether the buyer is an academic or for profit entity) or for limited commercial purposes that are pre-approved by New England Biolabs, Inc. The purchase of this product does not convey a license under any claims in the foregoing patents or patent applications directed to producing the product. The buyer cannot sell or otherwise transfer this product or its components to a third party or otherwise use this product for the following COMMERCIAL PURPOSES: (1) use of the products or its components in manufacturing; (2) use of the product or its components for therapeutic or prophylactic purposes in humans or animals. 
AGENCOURT ®, AMPURE ®, RNACLEAN ® AND SPRISELECT ® are registered trademarks of Beckman Coulter, Inc. 
B CORPORATION ® is a registered trademark of B Lab IP, LLC, Inc. 
E-GEL ® is a registered trademark of Life Technologies, Inc. 
SIZESELECT ™ is a trademark of Life Technologies, Inc. 
BIOANALYZER ® is a registered trademark of Agilent Technologies, Inc. 
ILLUMINA ® is a registered trademark of Illumina, Inc. 
ALPAQUA ® is a registered trademark of Alpaqua Engineering. LLC 
QUBIT ® is a registered trademark of Molecular Probes, Inc. 
© Copyright 2025, New England Biolabs, Inc.; all rights reserved