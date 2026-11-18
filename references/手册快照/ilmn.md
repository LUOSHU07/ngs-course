# Illumina DNA Prep Product Documentation
URL: https://support.illumina.com/content/dam/illumina-support/documents/documentation/chemistry_documentation/illumina_prep/1000000025416_12_idp.pdf
# Illumina DNA Prep 
# Reference Guide 
ILLUMINA PROPRIETARY Document # 1000000025416 v12 April 2026 
For Research Use Only. Not for use in diagnostic procedures. This document and its contents are proprietary to Illumina, Inc. and its affiliates ("Illumina"), and are intended solely for the contractual use of its customer in connection with the use of the product(s) described herein and for no other purpose. This document and its contents shall not be used or distributed for any other purpose and/or otherwise communicated, disclosed, or reproduced in any way whatsoever without the prior written consent of Illumina. Illumina does not convey any license under its patent, trademark, copyright, or common-law rights nor similar rights of any third parties by this document. The instructions in this document must be strictly and explicitly followed by qualified and properly trained personnel in order to ensure the proper and safe use of the product(s) described herein. All of the contents of this document must be fully read and understood prior to using such product(s). FAILURE TO COMPLETELY READ AND EXPLICITLY FOLLOW ALL OF THE INSTRUCTIONS CONTAINED HEREIN MAY RESULT IN DAMAGE TO THE PRODUCT(S), INJURY TO PERSONS, INCLUDING TO USERS OR OTHERS, AND DAMAGE TO OTHER PROPERTY, AND WILL VOID ANY WARRANTY APPLICABLE TO THE PRODUCT(S). ILLUMINA DOES NOT ASSUME ANY LIABILITY ARISING OUT OF THE IMPROPER USE OF THE PRODUCT(S) DESCRIBED HEREIN (INCLUDING PARTS THEREOF OR SOFTWARE). © 2026 Illumina, Inc. All rights reserved. All trademarks are the property of Illumina, Inc. or their respective owners. For specific trademark information, refer to www.illumina.com/company/legal.html. 
Document # 1000000025416 v12 
For Research Use Only. Not for use in diagnostic procedures. 
ii 
Illumina DNA Prep Reference Guide Table of Contents 
# Overview 1
DNA Input Recommendations 2Blood and Saliva Input Recommendations 4PCR Amplicons 4
# Consumables & Equipment 5
Product Contents 5User-Supplied Consumables & Equipment 8
# Protocol 12 
Tips and Techniques 13 Blood Lysis (Optional) 15 Dried Blood Spot Extraction (Optional) 17 Saliva Lysis (Optional) 19 Prepare for Protocol 21 Tagment Genomic DNA 23 Post Tagmentation Clean Up 24 Amplify Tagmented DNA 25 Prepare for Protocol 28 Clean Up Libraries 28 Pool Libraries 30 Dilute Libraries to the Starting Concentration 32 
# Resources & References 34 
Revision History 34 
Document # 1000000025416 v12 
For Research Use Only. Not for use in diagnostic procedures. 
iii 
Illumina DNA Prep Reference Guide Overview 
This guide explains how to prepare up to 384 unique dual-indexed paired-end libraries from DNA using the Illumina DNA Prep workflow. The Illumina DNA Prep workflow: 
## • Uses tagmentation, an enzymatic reaction, to fragment DNA and add adapter sequences in only 15 minutes. 
## • Innovates sample normalization at inputs ≥ 100 ng. 
## • Streamlines sample pooling and sequencing. 
## • Master mixed reagents reduce containers, pipetting, and hands-on time. 
## • Requires as little as 1 ng input. 
## • Can prepare libraries directly from whole blood or saliva samples when using an extraction protocol. 
Illumina DNA Prep Workflow 
The Illumina DNA Prep library prep kit uses a bead-based transposome complex to tagment genomic DNA, which is a process that fragments DNA and then tags the DNA with adapter sequences in one step. The bead-based transposome complex then fragments a set number of DNA molecules. This fragmentation provides flexibility to use a wide DNA input range to generate normalized libraries of consistent tight fragment size distribution. Following tagmentation, a limited-cycle PCR adds adapter sequences to the ends of a DNA fragment. This step enables compatibility across all Illumina sequencing systems. A subsequent Illumina Purification Beads (IPB) cleanup step then purifies libraries for use on an Illumina sequencing system. 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
1
> Illumina DNA Prep Reference Guide
# DNA Input Recommendations 
The Illumina DNA Prep protocol is compatible with DNA inputs of 1–500 ng or higher. For human DNA samples and other large complex genomes, the recommended minimum DNA input is 100–500 ng. For small genomes, such as microbial, the DNA input amount can be reduced to 1 ng. If the DNA input amount is reduced, the PCR cycling conditions must be modified accordingly. Assess DNA purity to make sure that the initial DNA sample does not contain > 1 mM EDTA and is free of organic contaminants, such as phenol and ethanol. These substances can interfere with the tagmentation react ion and result in assay failure. The Illumina DNA Prep workflow is compatible with blood and saliva samples when using the following protocols and reagent kits: 
## • Illumina Blood Lysis Protocol (requires Flex Lysis Reagent Kit) 
## • Illumina Dried Blood Spot Extraction (requires Bead-Linked Transposomes) 
## • Illumina Saliva Lysis Protocol 
Document # 1000000025416 v12 
For Research Use Only. Not for use in diagnostic procedures. 
2
Illumina DNA Prep Reference Guide The recommended number of PCR cycles for the BLT PCR program is adjusted based on sample input concentration and quality. If reducing the DNA input amount, modify the PCR cycling conditions accordingly. For more information, refer to Amplify Tagmented DNA on page 25. 
Total DNA Input (ng) Quantification of Input DNA Recommended Normalized Library Yield 
< 100 Yes No 100–500 No Yes Blood/Saliva No Yes Table 1 DNA Input Recommendations 
# DNA Input < 100 ng 
This protocol does not normalize final library yields from < 100 ng DNA input. Therefore, quantification and normalization of libraries before sequencing is required. If using < 100 ng DNA input, quantifying the initial DNA sample to determine the number of PCR cycles required is recommended. Use a fluorometric-based method to quantify double-stranded DNA input. Avoid methods that measure total nucleic acid, such as NanoDrop or other UV absorbance methods. 
# DNA Input 100–500 ng 
For DNA inputs between 100–500 ng, quantifying and normalizing the initial DNA sample is not required. Normalized samples produce < 20% coefficient of variance on average when pooled in equal volumes for sequencing. 
Access DNA Purity 
Assess the DNA purity to make sure that the initial DNA sample does not contain any organic contaminants, such as phenol and ethanol, and contains less than 1 mM EDTA. These substances can interfere with the tagmentation reaction and result in assay failure. 
## • UV absorbance is a common method used for assessing the purity of a DNA sample. The ratio of absorbance at 260 nm to 280 nm provides an indication of sample purity. This protocol is optimized for DNA with A260/280 ratios of 1.8–2.0, which indicates a DNA sample with high purity. 
## • For a secondary indication of sample purity, use the ratio of absorbance at 260 nm to absorbance at 230 nm. Target a 260/230 ratio of 2.0–2.2. Values outside this range indicate the presence of contaminants. For a complete list of contaminants, including sources, avoidance, and effects on the library preparation, refer to the Nextera XT Library Prep: Tips and Troubleshooting Technical Note .
## • Dilute the starting material in 10 mM Tris-HCl, pH 7.5–8.5. Incomplete tagmentation caused by contaminants can cause library preparation failure, poor clustering, or low quality sequencing results. 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
3
> Illumina DNA Prep Reference Guide
# Blood and Saliva Input Recommendations 
The Illumina DNA Prep protocol is compatible with fresh whole blood (requires the Flex Lysis Reagent Kit), dried blood (requires BLT), and saliva sample inputs. For information about protocols specific to blood and saliva, refer to Blood Lysis (Optional) on page 15, Dried Blood Spot Extraction (Optional) on page 17, or Saliva Lysis (Optional) on page 19. When starting with 10 μl liquid whole blood in EDTA tubes or 30 μl saliva in Oragene tubes, expect normalization of libraries equal to results observed when using ≥ 100 ng DNA input. Blood and saliva are heterogeneous sample types. Therefore the ability of Illumina DNA Prep to generate normalized libraries depends on the total amount of DNA obtained from the lysed sample. The following factors can adversely affect normalization of library independent of kit performance: 
## • Viscosity of the saliva samples 
## • Blood sample age 
## • Sample storage conditions 
## • Underlying medical conditions affecting white blood cell counts 
# PCR Amplicons 
When starting with PCR amplicons, the PCR amplicon must be > 150 bp. The standard clean-up protocol depletes libraries < 500 bp. Therefore, Illumina recommends that amplicons < 500 bp undergo a 1.8 x Illumina Purification Beads volume normal ratio to supernatant during Clean Up Libraries on page 28. Shorter amplicons can otherwise be lost during the library cleanup step. Tagmentation cannot add an adapter directly to the distal end of a fragment, so a drop in sequencing coverage of ~50 bp from each distal end is expected. To ensure sufficient coverage of the amplicon target region, design primers to extend beyond the target region by 50 bp per end. 
Document # 1000000025416 v12 
For Research Use Only. Not for use in diagnostic procedures. 
4
Illumina DNA Prep Reference Guide Consumables & Equipment 
The Illumina DNA Prep protocol requires the following Illumina-supplied and user-supplied consumables and equipment. The protocols have been optimized and validated using the items listed. Comparable performance is not guaranteed when using alternate consumables and equipment. Make sure that you have the required consumables and equipment before starting the protocol. 
# Product Contents 
Completing the Illumina DNA Prep protocol requires library prep reagents and index adapters. The number of index adapters required depends on the number of samples to be uniquely indexed for your experiment. Depending on the sample input type and sequencing requirements, the protocol might require additional, optional consumables. 
Component Kit Options Catalog # 
Library prep reagents Illumina DNA Prep (24 Samples) 20060060 Illumina DNA Prep (96 Samples) 20060059 
Document # 1000000025416 v12 
For Research Use Only. Not for use in diagnostic procedures. 
5
Illumina DNA Prep Reference Guide Component Kit Options Catalog # 
Index adapters¹ Illumina DNA/RNA UD Indexes Set A, Tagmentation (96 Indexes, 96 Samples) 20091654 Illumina DNA/RNA UD Indexes Set B, Tagmentation (96 Indexes, 96 Samples) 20091656 Illumina DNA/RNA UD Indexes Set C, Tagmentation (96 Indexes, 96 Samples) 20091658 Illumina DNA/RNA UD Indexes Set D, Tagmentation (96 Indexes, 96 Samples) 20091660 IDT for Illumina - DNA/RNA UD Set A, Tagmentation (96 Indexes, 96 Samples) (Obsolete) 20027213 IDT for Illumina - DNA/RNA UD Set B, Tagmentation (96 Indexes, 96 Samples) (Obsolete) 20027214 IDT for Illumina - DNA/RNA UD Set C, Tagmentation (96 Indexes, 96 Samples) (Obsolete) 20042666 IDT for Illumina - DNA/RNA UD Set D, Tagmentation (96 Indexes, 96 Samples) (Obsolete) 20042667 Nextera DNA CD Indexes (96 Indexes, 96 Samples) 20018708 
[Optional] Blood lysis² Flex Lysis Reagent Kit (96 samples) 20018706 
> ¹ Index kits are not interchangeable with Nextera XT index kits. ² Required when starting the protocol from fresh whole blood samples.
Library Prep Kit Contents 
Illumina DNA Prep Beads and Buffers, Store at room temperature* Tube Quantity Acronym Reagent Name Storage Temperature 24 Samples 96 Samples 
1 2 IPB Illumina Purification Beads Room temperature 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
6
> Illumina DNA Prep Reference Guide
Tube Quantity Acronym Reagent Name Storage Temperature 24 Samples 96 Samples 
1 4 TSB Tagment Stop Buffer Room temperature 1 1 TWB Tagment Wash Buffer Room temperature 
> * These reagents are shipped at 2°C to 8°C. Promptly store reagents at the indicated tube temperature to ensure proper performance.
Illumina DNA Prep PCR and Buffers, Store at -25°C to -15°C Tube Quantity Acronym Reagent Name 24 Samples 96 Samples 
1 1 RSB Resuspension Buffer 1 4 TB1 Tagmentation Buffer 1 1 4 EPM Enhanced PCR Mix 
Illumina DNA Prep Tagmentation (M) Beads, Store at 2°C to 8°C Tube Quantity Acronym Reagent Name 24 Samples 96 Samples 
1 4 BLT Bead-Linked Transposomes 
Index Kit Contents 
For index adapter sequences, refer to Illumina Adapter Sequences. 
IDT for Illumina DNA/RNA UD Indexes, IDT for Illumina Nextera DNA UD Indexes, or Nextera DNA CD Indexes (96 Indexes, 96 Samples) Plates, Store at -25°C to -15°C Quantity Description 
1 96 Dual Adapter Index Plate 
[Optional] Flex Lysis Reagent Kit* (Catalog #20018706) 
Quantity Acronym Description Storage Temperature 
4 BLB Blood Lysis Buffer Room Temperature 4 PK1 Proteinase K -25°C to -15°C 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
7
> Illumina DNA Prep Reference Guide
* These reagents are shipped at -25°C to -15°C. Promptly store reagents at the indicated tube temperature to ensure proper performance. 
Illumina Purification Beads are included in the Illumina DNA Prep 24 sample and 96 sample kits. 
[Optional] Illumina Purification Beads 
Acronym Description Catalog # 
IPB 30 ml 20119944 IPB 100 ml 20060057 IPB 400 ml 20060058 
# User-Supplied Consumables & Equipment 
Make sure that you have the required consumables and equipment before starting the protocol. Some items are required only for specific workflows. These items are specified in separate tables. The protocol has been optimized and validated using the items listed. Comparable performance is not guaranteed when using alternate consumables and equipment. 
Consumables 
Consumable Supplier 
Microcentrifuge tubes, 1.7 ml General lab supplier Pipette tips, 10 μl General lab supplier Pipette tips, 20 μl General lab supplier Pipette tips, 200 μl General lab supplier Pipette tips, 1000 μl General lab supplier 96-well 0.8 ml polypropylene deep-well storage plate (MIDI plate) Thermo Fisher Scientific, part # AB-0859 Nuclease-free water General lab supplier Hard-Shell 96-well PCR plates Bio-Rad, catalog # HSP-9601 Microseal 'B' adhesive seals Bio-Rad, catalog # MSB-1001 Microseal 'F' foil seals Bio-Rad, catalog # MSF-1001 RNase/DNase-free multichannel reagent reservoirs, disposable VWR 
[Optional] catalog # 89094-658 Ethanol 200 proof (absolute) for molecular biology (500 ml) General lab supplier 
Document # 1000000025416 v12 
For Research Use Only. Not for use in diagnostic procedures. 
8
Illumina DNA Prep Reference Guide Consumable Supplier 
Qubit dsDNA HS Assay Kit One of the following, depending on quantification method: • Thermo Fisher Scientific, catalog # Q32851 • Thermo Fisher Scientific, catalog # Q32854 Quant-iT PicoGreen dsDNA Assay Kit Thermo Fisher Scientific, catalog # P11496 One of the following kits, depending on quantification method: • [Bioanalyzer] Agilent High Sensitivity DNA Kit • [Fragment Analyzer] High Sensitivity NGS Fragment Analysis Kit One of the following suppliers, depending on instrument: • Agilent, catalog # 5067–4626* • Advanced Analytical, catalog # DNF-474-0500 Qubit Assay Tubes Thermo Fisher Scientific, catalog # Q32856 One of the following kits for quantification: • Qubit dsDNA BR Assay Kit • KAPA Library Quantification Kit – Illumina qPCR Instrument / Reference Dye Universal • Thermo Fisher Scientific, catalog # Q32850 or Q32853 • Roche, catalog # 07960140001, KAPA code KK4824 One of the following kits, depending on qualification method: • [Dried Blood] Dried Blood Spots (DBS) card • [Blood] EDTA blood collection tubes • [Saliva] Oragene DNA collection kit for saliva • GE Healthcare, catalog # 10534320 • Becton Dickinson • Genotek, catalog # OGR-500 or OGD-510 
> * End of life announced. Refer to vendor site for more information.
# Consumables for Blood, Dried Blood Spot, and Saliva Input 
Consumable Supplier [Dried Blood] Dried Blood Spots (DBS) card GE Healthcare, catalog # 10534320 
[Blood] Flex Lysis Reagent Kit Illumina, catalog # 20018706 
[Blood] EDTA blood collection tubes Becton Dickinson 
[Saliva] Oragene DNA collection kit for saliva Genotek, catalog # OGR-500 or OGD-510 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
9
> Illumina DNA Prep Reference Guide
Equipment 
Equipment Supplier 
Pipettes, multichannel, 10 μl General lab supplier Pipettes, multichannel, 20 μl General lab supplier Pipettes, multichannel, 200 μl General lab supplier Pipettes, single channel, 10 μl General lab supplier Pipettes, single channel, 20 μl General lab supplier Pipettes, single channel, 200 μl General lab supplier Pipettes, single channel, 1000 μl General lab supplier Magnetic Stand-96 Thermo Fisher Scientific, catalog # AM 10027 Microcentrifuge General lab supplier Microplate centrifuge General lab supplier Qubit Fluorometer 4.0 Thermo Fisher Scientific, catalog # Q33238 or Q33327 Vortexer General lab supplier One of the following analyzers: • Fragment Analyzer • 2100 Bioanalyzer Desktop System • 4150 TapeStation System • 4200 TapeStation System Agilent Technologies catalog #: • Refer to web product pages for catalog # • G2939BA* or G2940CA • G2992AA • G2991BA 
[Saliva] Water bath or air incubator capable of reaching 50°C As recommended by DNA Genotek, refer to Genotek's product pages. 
> * No longer available for purchase.
# Thermal Cyclers 
The following table lists recommended thermal cyclers or specifications. PCR thermal cyclers must be capable of supporting the sample volumes and temperature profiles used in this workflow, with appropriate thermal accuracy and block uniformity to ensure consistent incubation and amplification performance. Validate the thermal cycler before performing the protocol. Performance may vary depending on the specific thermal cycler and consumables used. Minor workflow optimization may be required to account for instrument and consumable specific differences. 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
10 
> Illumina DNA Prep Reference Guide
Thermal Cycler Supplier/Description 
Thermal cycler with the following specifications: • Heated lid • Block ramp rate: ≥ 2.5°C/sec • Temperature control range: • Min ≤ 4°C • Max ≥ 99°C • Temperature accuracy: ±0.25°C • Temperature uniformity: ±0.5°C • Capable of supporting reaction volumes of 100 μl • Compatible with 96-well PCR plates (full or semi-skirted), or suitable for the applicable workflow. General lab supplier 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
11 
> Illumina DNA Prep Reference Guide
# Protocol 
This section describes the Illumina DNA Prep protocol. 
## • Review the planned complete sequencing workflow, from sample through analysis, to ensure compatibility of products and experiment parameters. 
## • Before proceeding, confirm kit contents and make sure that you have the required components, equipment, and consumables. This protocol requires library prep reagents and index adapters. Index adapters are sold separately. Refer to Consumables & Equipment on page 5. 
## • Follow the protocol in the order shown, using the specified volumes and incubation parameters. 
Prepare for Pooling 
If you plan to pool libraries, record information about your samples before starting library prep using Illumina Experiment Manager (IEM), Local Run Manager, or BaseSpace Sequence Hub. For information on the tools compatible with your sequencing system, visit the Illumina DNA Prep Compatible Products support page. 
## • For low-plexity pooling strategies (2-plex to 9-plex), refer to the Index Adapters Pooling Guide. 
## • For index adapter sequences and information about recording the sequences, refer to Illumina Adapter Sequences. 
Illumina DNA Prep Workflow 
The following diagram illustrates the Illumina DNA Prep workflow. 
## • Safe stopping points are marked between steps. 
## • Time estimates are based on preparing 16 samples using a multichannel pipette. 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
12 
> Illumina DNA Prep Reference Guide
Figure 1 Illumina DNA Prep Workflow 
# Tips and Techniques 
Safe Stopping Point 
Unless a safe stopping point is specified in the protocol, proceed immediately to the next step. 
Avoiding Cross-Contamination 
## • When adding or transferring samples or reagent master mixes, change tips between each sample .
Document # 1000000025416 v12 
For Research Use Only. Not for use in diagnostic procedures. 
13 
Illumina DNA Prep Reference Guide • When adding index adapters with a multichannel pipette, change tips between each row or each column . If using a single channel pipette, change tips between each sample. 
## • [Tubes] Open only one index adapter tube at a time to prevent misplacing caps. Remove unused index adapter tubes from the working area. 
## • Remove partially used index adapter tubes from the working area. 
Sealing the Plate 
## • Always seal the 96-well plate with the adhesive seal using a rubber roller to cover the plate before the following steps in the protocol: 
– Shaking steps 
– Thermal cycling steps 
– Centrifuge steps 
## • Microseal 'B' adhesive seals are effective at -40°C to 110°C and suitable for skirted or semiskirted PCR plates. Use Microseal 'B' seals for thermal cycling or short-term storage. 
## • Microseal ‘F’ foil seals are effective at temperatures down to -70°C and are suitable for storing the 96-well plates containing the final libraries long term. 
Handling Bead-Linked Transposomes (BLT) 
## • Store the BLT stock tube upright in the refrigerator so that the beads are always submerged in the buffer. 
## • Vortex the BLT stock tube thoroughly until the beads are resuspended before use. To avoid resettling the beads, centrifugation before pipetting is not recommended. 
## • If beads are adhered to the side or top of a 96-well plate, centrifuge at 280 × g for 3 seconds, and then pipette to resuspend. 
## • When washing beads: 
– Use the appropriate magnetic stand for the plate. 
– Keep the plate on the magnetic stand until the instructions specify to remove it. 
– Do not agitate the plate while it is on the magnetic stand. 
– Do not disturb the bead pellet. 
– If beads are aspirated into pipette tips, dispense back into the plate on the magnetic stand and wait until the liquid is clear (~2 minutes). 
– Dispense Tagment Wash Buffer (TWB) directly onto the beads. 
– If liquid becomes adhered to the side or top of the tube or well, centrifuge at 280 × g for 3 seconds to pull volume into liquid. 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
14 
> Illumina DNA Prep Reference Guide
Preparing Illumina DNA/RNA Unique Dual (UD) Indexes Plate 
## • If using a NextSeq 500 system, the read lengths must be modified to accommodate 10 base pair indexes. Visit the compatible products page on the Illumina support site. 
# Blood Lysis (Optional) 
Use this protocol when performing the Illumina DNA Prep workflow using blood sample inputs with the Flex Lysis Reagent Kit. This protocol has been validated using fresh whole blood collected in EDTA collection tubes. Store the blood at 4°C and process it within 3 days. The use of frozen blood has not been validated and cannot be recommended. 
The Flex Lysis kit contains 800 μl BLB. Preparing 96 samples following the Blood Lysis workflow requires 672 μl (96 samples x 7 μl = 672 μl). This protocol is expected to generate > 100 ng of DNA output at the end of the blood lysis step. 
Blood is a potential source of infectious diseases. Follow site-specific procedures to ensure the safe handling of blood samples. During the lysis protocol, make sure that the entire blood sample is fully lysed (brown in color following the heat incubation step) before proceeding to subsequent steps. A fully lysed sample makes sure that any blood borne pathogens are eliminated and the sample is no longer biohazardous. 
Consumables 
## • BLB (Blood Lysis Buffer) 
## • IPB (Illumina Purification Beads) 
## • PK1 (Proteinase K) 
## • EtOH (Freshly prepared 80% ethanol) 
## • EDTA collection tubes (for blood sample collection) 
## • Nuclease-free water 
## • 96-well PCR plate 
About Reagents 
## • IPB 
– Must be at room temperature before use. 
– Resuspend before each use. 
– Resuspend frequently to make sure the beads are evenly distributed. 
– Aspirate and dispense slowly due to the viscosity of the solution. 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
15 
> Illumina DNA Prep Reference Guide
Preparation 
1. Prepare the following consumables. 
Item Storage Instructions 
BLB Room temperature If frozen, thaw at room temperature. If precipitates are observed, heat at 37°C for 10 minutes and vortex until resuspended. IPB Room temperature* Use at room temperature. PK1 -25°C to -15°C Place on ice until needed. 
> *IPB is included in the Illumina DNA Prep Kit.
2. Prepare fresh 80% EtOH from absolute ethanol. 3. Save the following BLP program on the thermal cycler: 
## • Choose the preheat lid option and set to 100°C 
## • 56°C for 10 minutes 
Procedure 
1. Combine the following volumes to prepare the Lysis Master Mix. Multiply each volume by the number of samples being processed. 
## • BLB (7 μl) 
## • PK1 (2 μl) 
## • Nuclease-free water (31 μl) Reagent overage is included in the volume to ensure accurate pipetting. 2. Vortex and centrifuge the Lysis Master Mix. 3. Invert the EDTA tube 10 times to mix. 4. Transfer 10 μl blood from the tube to one well of a 96-well PCR plate. 5. Add 40 μl Lysis Master Mix to each sample. 6. Resuspend IPB as follows. a. To mix, invert the bottle manually for 2 minutes, at a rate of 1 inversion per second. While inverting, rotate the bottle 90 degrees every 30 seconds. b. If beads are still adhered to the walls of the container, invert the bottle manually for an additional 1 minute. 7. Add 20 μl IPB to the well. 8. Using a pipette set to 50 μl, slowly pipette 10 times to mix, and then seal. 9. Place on the preprogrammed thermal cycler and run the BLP program. 10. Place on a magnetic stand and wait 5 minutes. 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
16 
> Illumina DNA Prep Reference Guide
The dark brown color of the blood from the lysis reaction keeps the liquid from becoming clear. The beads migrate after 5 minutes. 11. Without disturbing the beads, remove and discard supernatant. 12. If beads are aspirated into pipette tips, dispense back to the plate on the magnetic stand, and then wait until the liquid is clear (~2 minutes). 13. Add 150 μl fresh 80% EtOH to the well. 14. Incubate on the magnetic stand for 30 seconds. 15. Pipette to remove and discard the EtOH. 16. Use a 20 μl pipette to remove and discard all residual EtOH. 17. Remove the plate from the magnetic stand. 18. Add 30 μl nuclease-free water and pipette to resuspend. 19. If you are not stopping, proceed immediately to step 3 of Tagment Genomic DNA on page 23. 
SAFE STOPPING POINT 
Seal the plate with a Microseal 'B' adhesive seal and store the plate at 2°C to 8°C for up to 3 days. 
# Dried Blood Spot Extraction (Optional) 
This step prepares a dried blood spot extraction using the Bead-Linked Transposomes (BLT) to tagment DNA, which is a process that fragments and tags the DNA with adapter sequences. 
The Flex Lysis kit contains 800 μl BLB. Preparing 96 samples following the Blood Lysis workflow requires 672 μl (96 samples x 7 μl = 672 μl). 
Blood is a potential source of infectious diseases. Follow site-specific procedures to ensure the safe handling of blood samples. During the lysis protocol, make sure that the entire blood sample is fully lysed (brown in color following the heat incubation step) before proceeding to subsequent steps. A fully lysed sample makes sure that any blood borne pathogens are eliminated and the sample is no longer biohazardous. 
Consumables 
## • BLB (Blood Lysis Buffer) 
## • PK1 (Proteinase K) 
## • IPB (Illumina Purification Beads) 
– 30 ml 
– 100 ml 
– 400 ml 
## • Dried Blood Spots (DBS) card (GE Healthcare, catalog # 10534320) 
Document # 1000000025416 v12 
For Research Use Only. Not for use in diagnostic procedures. 
17 
Illumina DNA Prep Reference Guide • EtOH (Freshly prepared 80% ethanol) 
## • Nuclease-free water 
## • 96-well PCR plate 
## • 1.5 ml tube 
## • [Optional] Microseal 'B' adhesive seal 
About Reagents 
## • BLB (Blood Lysis Buffer) is shipped frozen but stored at room temperature. Keep at room temperature for optimal use. 
## • Choose the appropriate IPB kit for your sample size. 
Preparation 
1. Prepare the following consumables: 
## • BLB—Check for any precipitates. If present, heat at 37°C for 10 minutes and vortex to resuspend. 
## • DBS—Add EDTA-stablized blood (70 μl per shot) or add a finger-poke sample. 
## • PK1—Place on ice. 
## • IPB—Keep at room temperature. 2. Preheat the thermal mixer to 56°C. 
Procedure 
1. Prepare 5 × 3 mm 2 punches from a DBS card and add them to a 1.5 ml tube. 2. Combine the following reagents per reaction to create a lysis master mix. 
## • BLB (20 μl) 
## • PK1 (2 μl) 
## • Nuclease-free water (178 μl) 3. Vortex and centrifuge the lysis master mix briefly. 4. Add 200 μl master mix to each sample. 5. Pipette to mix. 6. Shake on the preheated thermal mixer at 56°C for ten minutes. 7. Briefly centrifuge the sample. 8. Without removing the punches, transfer all supernatant (~190 μl) to a new 1.5 ml tube. 9. Vortex and invert IPB multiple times until resuspended. 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
18 
> Illumina DNA Prep Reference Guide
10. Add 90 μl of IPB to the lysed sample. 11. Using a pipette set to 200 μl, thoroughly mix IPB and sample. 12. Incubate at room temperature for five minutes. 13. Place on the magnetic stand and incubate for five minutes. The lysis reaction turns brown, so the IPB are not visible. 14. Without disturbing the bead pellet, pipette to remove the supernatant. 15. Make sure that a bead pellet is at the bottom of the tube before discarding the supernatant. 16. If the beads are accidentally aspirated: a. Return the sample to the tube and allow it to settle. b. Remove and discard the supernatant. 17. Wash beads as follows. a. Keep on the magnetic stand and add 200 μl fresh 80% EtOH to each tube. b. Incubate on the magnetic stand and wait 30 seconds. c. Remove and discard all supernatant from each tube. 18. Wash beads a second time. 19. Wash beads a third time. 20. Remove all residual EtOH from each tube. 21. Remove and discard any residual EtOH. 22. Air-dry on the magnetic stand for five minutes. 23. Remove from the magnetic stand. 24. Resuspend IPB in 30 μl of nuclease-free water. Pipette to resuspend. 25. Transfer the resuspended beads to a 96-well PCR plate. 26. If you are not stopping, proceed immediately to step 3 of Tagment Genomic DNA on page 23. 
SAFE STOPPING POINT 
If you are stopping, seal the plate with a Microseal 'B' adhesive seal, and store at 2°C to 8°C for up to 3 days. 
# Saliva Lysis (Optional) 
Use this protocol when performing the Illumina DNA Prep workflow using saliva sample inputs. This protocol is validated for saliva collected only in Oragene DNA saliva collection tubes. The saliva is mixed with the Oragene Dx solution contained in the collection tube, making it stable at room temperature. This protocol is expected to generate > 100 ng of DNA output at the end of the saliva lysis step. 
Saliva is a potential source of infectious diseases. Follow site-specific procedures to ensure the safe handling of saliva samples. 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
19 
> Illumina DNA Prep Reference Guide
Consumables 
## • IPB (Illumina Purification Beads) 
## • 96-well PCR plate 
## • EtOH (Freshly prepared 80% ethanol) 
## • Nuclease-free water 
## • Oragene DNA collection tubes (for saliva sample collection) 
About Reagents 
## • IPB 
– Must be at room temperature before use. 
– Vortex to resuspend before each use. 
– Resuspend frequently to make sure the beads are evenly distributed. 
– Aspirate and dispense slowly due to the viscosity of the solution. 
Preparation 
1. Prepare the following consumables. 
Item Storage Instructions 
IPB Room temperature* Vortex and invert to mix. Saliva samples in Oragene DNA collection tubes Room temperature For information on sample preparation and storage, refer to the DNA Genotek website. 
> *IPB is included in the Illumina DNA Prep Kit.
2. Prepare fresh 80% EtOH from absolute ethanol. 
Procedure 
1. For each sample, add 20 μl nuclease-free water to one well of a 96-well PCR plate. 2. Vortex the heat-treated Oragene DNA collection tube. 3. Transfer 30 μl saliva sample from the tube to the well containing nuclease-free water. 4. Slowly pipette to mix. For viscous samples, use a wide-bore pipette tip for more accurate pipetting. 5. Vortex and invert IPB multiple times to resuspend. 6. Add 20 μl IPB to the well. 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
20 
> Illumina DNA Prep Reference Guide
7. Using a pipette set to 50 μl, slowly pipette 10 times to mix. 8. Incubate at room temperature for 5 minutes. 9. Place on a magnetic stand and wait 5 minutes. 10. Without disturbing the beads, remove and discard supernatant. 11. If beads are aspirated into pipette tips, dispense back to the plate on the magnetic stand, and wait until the liquid is clear (~2 minutes). 12. Add 150 μl fresh 80% EtOH to the well. 13. Incubate on the magnetic stand for 30 seconds. 14. Use a 20 μl pipette to remove and discard all residual EtOH. 15. Remove the plate from the magnetic stand. 16. Add 30 μl nuclease-free water and pipette to resuspend. 17. Seal the plate with Microseal 'B', and then centrifuge at 280 × g for 30 seconds. 18. If you are not stopping, proceed immediately to step 3 of Tagment Genomic DNA on page 23. 
SAFE STOPPING POINT 
Seal the plate with a Microseal 'B' adhesive seal and store at 2°C to 8°C for up to 3 days. 
# Prepare for Protocol 
1. Remove reagents from storage. 2. Remove the reagents from the box and thaw as follows. 
Reagent Box Name Instructions 
TSB Illumina DNA Prep Beads and Buffers If precipitates are observed, heat at 37°C for 10 minutes, and then vortex until precipitates are dissolved. TWB Illumina DNA Prep Beads and Buffers Use at room temperature. Vortex to mix. Table 2 Room Temperature Storage 
Reagent Box Name Instructions 
BLT Illumina DNA Prep Tagmentation (M) Beads Bring to room temperature. Vortex to mix. Do not centrifuge before pipetting. Table 3 2°C to 8°C Storage 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
21 
> Illumina DNA Prep Reference Guide
Reagent Box Name Instructions 
TB1 Illumina DNA Prep PCR and Buffers Bring to room temperature. Vortex to mix. EPM Illumina DNA Prep PCR and Buffers Thaw on ice. Invert to mix, then centrifuge briefly. Table 4 -25°C to -15°C Storage 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
22 
> Illumina DNA Prep Reference Guide
# Tagment Genomic DNA 
This step uses the Bead-Linked Transposomes (BLT) to tagment DNA, which is a process that fragments and tags the DNA with adapter sequences. 
Consumables 
## • BLT (Bead-Linked Transposomes) 
## • TB1 (Tagmentation Buffer 1) 
## • Nuclease-free water 
## • 8-tube strip 
## • 96-well PCR plate 
## • Microseal 'B' adhesive seal 
This set of reagents contains potentially hazardous chemicals. Personal injury can occur through inhalation, ingestion, skin contact, and eye contact. Wear protective equipment, including eye protection, gloves, and laboratory coat appropriate for risk of exposure. Handle used reagents as chemical waste and discard in accordance with applicable regional, national, and local laws and regulations. For additional environmental, health, and safety information, refer to the SDS at support.illumina.com/sds.html. 
About Reagents 
## • BLT 
– Must be stored upright so that the beads are always submerged in the buffer. 
– Do not use BLT that has been stored below 2°C. 
Preparation 
1. Prepare the following consumables: 
## • BLT—Vortex to mix. Do not centrifuge before pipetting. 
## • TB1—Vortex to mix. 2. Save the following TAG program on the thermal cycler: 
## • Choose the preheat lid option and set to 100°C 
## • Set the reaction volume to 50 μl 
## • 55°C for 15 minutes 
## • Hold at 10°C 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
23 
> Illumina DNA Prep Reference Guide
Procedure 
1. Add 2–30 μl DNA to each well of a 96-well PCR plate so that the total input amount is 1–500 ng. 2. If DNA volume is < 30 μl, add nuclease-free water to the DNA samples to bring the total volume to 30 μl. 3. Vortex BLT for 10 seconds to resuspend. Repeat as necessary. 4. For each sample, combine the following volumes to prepare the Tagmentation Master Mix. Multiply each volume by the number of samples being processed. 
## • BLT (11 μl) 
## • TB1 (11 μl) These volumes produce 22 μl Tagmentation Master Mix per sample, which includes extra volume to ensure accurate pipetting. 5. Vortex the Tagmentation Master Mix for 10 seconds to resuspend. 6. Divide the Tagmentation Master Mix volume equally into an 8-tube strip. 7. Using a multichannel pipette, transfer 20 μl Tagmentation Master Mix from the 8-tube strip to each well of the plate containing a sample. Use fresh tips for each sample column. 8. Discard the 8-tube strip after the Tagmentation Master Mix has been dispensed. 9. Pipette each sample 10 times to resuspend. 10. Place on the preprogrammed thermal cycler and run the TAG program. 
# Post Tagmentation Clean Up 
This step washes the adapter-tagged DNA on the BLT before PCR amplification. 
Consumables 
## • TSB (Tagment Stop Buffer) 
## • TWB (Tagment Wash Buffer) 
## • Microseal 'B' adhesive seal 
About Reagents 
## • TWB 
– Pipette slowly to minimize foaming. 
– A deliberately slow pipetting technique minimizes the potential of foaming to avoid incorrect volume aspiration and incomplete mixing. 
Document # 1000000025416 v12 
For Research Use Only. Not for use in diagnostic procedures. 
24 
Illumina DNA Prep Reference Guide Preparation 
1. Prepare the following consumables: 
## • TSB—If precipitates are observed, heat at 37°C for 10 minutes, and then vortex until precipitates are dissolved. 
## • TWB—Use at room temperature. Vortex to mix. 2. Save the following PTC program on the thermal cycler: 
## • Choose the preheat lid option and set to 100°C 
## • Set the reaction volume to 60 μl 
## • 37°C for 15 minutes 
## • Hold at 10°C 
Procedure 
1. Add 10 μl TSB to each well of the plate. 2. Pipette each well slowly 10 times to resuspend the beads, and seal the plate. 3. Place on the preprogrammed thermal cycler and run the PTC program. 4. Centrifuge the samples for approximately 2 seconds, place them on a magnetic stand, and then wait until the liquid is clear (~3 minutes). 5. Using a multichannel pipette, remove and discard supernatant. 6. Wash as follows. a. Remove from the magnetic stand. b. Use a deliberately slow pipetting technique to add 100 μl TWB directly onto the beads. c. Pipette slowly until beads are fully resuspended. d. Place the plate on the magnetic stand and wait until the liquid is clear (~3 minutes). e. Using a multichannel pipette, remove and discard supernatant. f. Repeat steps a–d for a second wash. 7. Remove from the magnetic stand and use a deliberately slow pipetting technique to add 100 μl TWB directly onto the beads. 8. Pipette slowly until beads are fully resuspended. Alternatively, seal the plate and use a plate shaker at 1600 rpm for 1 minute. 9. Place the plate on the magnetic stand and wait until the liquid is clear (~3 minutes). 10. Keep on the magnetic stand until step 4 of the Procedure section in Amplify Tagmented DNA on page 25. The TWB remains in the wells to prevent drying of the beads. 
# Amplify Tagmented DNA 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
25 
> Illumina DNA Prep Reference Guide
This step amplifies the tagmented DNA using a limited-cycle PCR program. The PCR step adds Index 1 (i7) adapters, Index 2 (i5) adapters, and sequences required for sequencing cluster generation. To confirm the indexes of libraries selected for low plexity pooling have the appropriate color balance, refer to the Index Adapters Pooling Guide .For a list of compatible index adapters for use with this protocol, refer to Product Contents on page 5. 
Consumables 
## • EPM (Enhanced PCR Mix) 
## • Microcentrifuge tubes, 1.7 ml 
## • Microseal 'B' adhesive seal 
## • Nuclease-free water 
## • Index adapters 
About Reagents 
## • Index adapter plates 
– A well can contain > 10 μl index adapters. 
– Do not add samples to the index adapter plate. 
– Each well of the index plate is single use only. 
Preparation 
1. Prepare the following consumables: 
## • EPM—Invert to mix, then centrifuge briefly. 
## • Index adapter plates 
## • Use 10 base pair index codes that differ from other indexes, such as other Illumina index adapters and Nextera DNA CD indexes, which use eight base pair index codes. Confirm that the sequencing system is configured for 10 base pair index codes. If using a NextSeq 500 system, the read lengths must be modified to accommodate 10 base pair indexes. 
## • Pipette slowly to minimize foaming. 
## • Centrifuge at 1000 × g for 1 minute to settle liquid away from the seal. 
## • [Plates] Spin briefly before use. 
## • [Tubes] Vortex to mix, then centrifuge briefly. 2. Save the following BLT PCR program on a thermal cycler using the appropriate number of PCR cycles indicated in the table: 
## • Choose the preheat lid option and set to 100°C 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
26 
> Illumina DNA Prep Reference Guide
## • 68°C for 3 minutes 
## • 98°C for 3 minutes 
## • (X) cycles of: 
## • 98°C for 45 seconds 
## • 62°C for 30 seconds 
## • 68°C for 2 minutes 
## • 68°C for 1 minute 
## • Hold at 10°C 
Total DNA Input (ng) Number of PCR Cycles (X) 
1-9 12 10-24 825–49 650–99 5100–500 5Blood/Saliva 5
Procedure 
1. For each sample, combine the following volumes to prepare the PCR Master Mix. Multiply each volume by the number of samples being processed. Reagent overage is included in the volume to ensure accurate pipetting. 
## • EPM (22 μl) 
## • Nuclease-free water (22 μl) 2. Vortex, and then centrifuge the PCR Master Mix at 280 × g for 10 seconds. 3. With the plate on the magnetic stand, use a 200 μl multichannel pipette to remove and discard supernatant. Foam that remains on the well walls does not adversely affect the library. 4. Remove from the magnetic stand. 5. Immediately add 40 μl PCR Master Mix directly onto the beads in each sample well. 6. Immediately pipette to mix until the beads are fully resuspended. Alternatively, seal the plate and use a plate shaker at 1600 rpm for 1 minute. 7. Seal the sample plate and centrifuge at 280 × g for 3 seconds. 8. Add the appropriate index adapters to each sample. 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
27 
> Illumina DNA Prep Reference Guide
Index Kit Type Kit Configuration Volume of Index Adapter per Sample 
96 plex (dual index) 96-well plate 10 μl prepaired i7 and i5 9. Using a pipette set to 40 μl, pipette 10 times to mix. Alternatively, seal the plate and use a plate shaker at 1600 rpm for 1 minute. 10. Seal the plate with Microseal 'B', and then centrifuge at 280 × g for 30 seconds. 11. Place on the preprogrammed thermal cycler and run the BLT PCR program. 
SAFE STOPPING POINT 
If you are stopping, store at 2°C to 8°C for up to 30 days. 
# Prepare for Protocol 
1. Remove reagents from storage. 2. Remove the reagents from the box and thaw as follows. 
Reagent Box Name Instructions 
IPB Illumina DNA Prep Beads and Buffers Vortex and invert to mix. Table 5 Room Temperature Storage 
Reagent Box Name Instructions 
RSB Illumina DNA Prep PCR and Buffers Thaw at room temperature. 
[Tubes] Vortex to mix, then centrifuge briefly. 
[Plates] Spin briefly before use. Table 6 -25°C to -15°C Storage 
# Clean Up Libraries 
This step uses double-sided bead purification procedure to purify the amplified and indexed libraries. 
Consumables 
## • IPB (Illumina Purification Beads) 
## • RSB (Resuspension Buffer) 
## • EtOH (Freshly prepared 80% ethanol) 
## • Nuclease-free water 
Document # 1000000025416 v12 
For Research Use Only. Not for use in diagnostic procedures. 
28 
Illumina DNA Prep Reference Guide • 96-well 0.8 ml Polypropylene Deepwell Storage Plate (MIDI plate) (2) 
## • 96-well PCR plate 
## • Microseal 'B' adhesive seal 
## • Microseal 'F' foil seal 
About Reagents 
## • IPB 
– Must be at room temperature before use. 
– Vortex to resuspend before each use. 
– Aspirate and dispense slowly due to the viscosity of the solution. 
Preparation 
1. RSB—Vortex to mix. 2. For each sample, prepare 400 μl fresh 80% EtOH from absolute ethanol. Including an overage of 20% is recommended. 
Procedure 
1. Centrifuge at 280 × g for 1 minute to collect contents at the bottom of the well. 2. Place the plate on the magnetic stand and wait until the liquid is clear (~5 minutes). 3. Transfer 45 μl supernatant from each well of the PCR plate to the corresponding well of a new MIDI plate. 4. Resuspend IPB as follows. a. To mix, invert the bottle manually for 2 minutes, at a rate of 1 inversion per second. While inverting, rotate the bottle 90 degrees every 30 seconds. b. If beads are still adhered to the walls of the container, invert the bottle manually for an additional 1 minute. 5. For standard DNA input > 500 bp gDNA, blood, or saliva, perform the following steps. a. Add 40 μl nuclease-free water to each well-containing supernatant. b. Add 45 μl IPB to each well-containing supernatant. c. Pipette each well 10 times to mix. Alternatively, seal the plate and use a plate shaker at 1600 rpm for 1 minute. d. Seal the plate and incubate at room temperature for 5 minutes. e. Place on the magnetic stand and wait until the liquid is clear (~5 minutes). f. During incubation, thoroughly vortex and resuspend the IPB, and then add 15 μl to each well of a 
new MIDI plate. 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
29 
> Illumina DNA Prep Reference Guide
g. Transfer 125 μl supernatant from each well of the first plate into the corresponding well of the new MIDI plate containing 15 μl undiluted IPB. h. Pipette each well in the MIDI plate 10 times to mix. Alternatively, seal the plate and use a plate shaker at 1600 rpm for 1 minute. i. Discard the first plate. 6. For small PCR amplicon input < 500 bp, perform the following steps. a. Add 81 μl IPB to each well of the MIDI plate containing supernatant. b. Pipette each well 10 times to mix. Alternatively, seal the plate and use a plate shaker at 1600 rpm for 1 minute. 7. Incubate the sealed MIDI plate at room temperature for 5 minutes. 8. Place on the magnetic stand and wait until the liquid is clear (~5 minutes). 9. Without disturbing the beads, remove and discard supernatant. 10. Wash beads as follows. a. With the plate on the magnetic stand, add 200 μl fresh 80% EtOH without mixing. b. Incubate for 30 seconds. c. Without disturbing the beads, remove and discard supernatant. 11. Wash beads a second time. 12. Use a 20 μl pipette to remove and discard residual EtOH. 13. Air-dry on the magnetic stand for 5 minutes. 14. Remove from the magnetic stand. 15. Add 32 μl RSB to the beads. 16. Pipette to resuspend. 17. Incubate at room temperature for 2 minutes. 18. Place the plate on the magnetic stand and wait until the liquid is clear (~2 minutes). 19. Transfer 30 μl supernatant to a new 96-well PCR plate. 
SAFE STOPPING POINT 
If you are stopping, seal the plate with Microseal 'B' adhesive seal or Microseal 'F' foil seal, and store at -25°C to -15°C for up to 30 days. 
# Pool Libraries 
When the DNA input is 100–500 ng, quantifying and normalizing individual libraries generated in the same experiment is not necessary. However, the final yield of libraries generated in separate experiments can vary slightly. To achieve optimal cluster density, pool equal library volumes and quantify the pool before sequencing. 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
30 
> Illumina DNA Prep Reference Guide
DNA Input 100–500 ng 
1. Combine 5 μl each library (up to 384 libraries) in a 1.7 ml microcentrifuge tube. 2. Vortex to mix, and then centrifuge. 3. Quantify the library pool using a dsDNA fluorescent dye method, such as Qubit or PicoGreen. 
DNA Input < 100 ng 
Quantify each library individually using Qubit or PicoGreen. 
Check Library Quality (Optional) 
Assess quality of 1 μl library or pooled libraries using one of the following methods. 
– Add 1 μl RSB to the library or pooled libraries, and then analyze the 2 μl volume using the Advanced Analytical Fragment Analyzer with the HS-NGS High Sensitivity 474 kit. 
– Analyze 1 μl undiluted library using the Agilent Technology 2100 Bioanalyzer with a High Sensitivity DNA chip. Typical libraries show a broad size distribution of 250–1000 bp. The following figures show typical library size profiles with an average fragment size of 600 bp when analyzed with a size range of 150–1500 bp. Figure 2 Example Fragment Analyzer Trace 
Figure 3 Example Bioanalyzer Trace 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
31 
> Illumina DNA Prep Reference Guide
# Dilute Libraries to the Starting Concentration 
This step dilutes libraries to the starting concentration for your sequencing system and is the first step in a serial dilution. After diluting to the starting concentration, libraries are ready to be denatured and diluted to the final loading concentration. For seqencing, Illumina recommends setting up a paired-end run with 151 cycles per read (2 x 151) and 10 cycles per Index Read. Illumina DNA/RNA UD Indexes uses 10 base pair index codes that differ from the Nextera DNA CD Indexes, which use eight base pair index codes. This change in base pair index codes can require adjustments to your sequencing run setup. 1. Calculate the molarity value of the library or pooled libraries using the following formula. 
## • For libraries qualified on a Bioanalyzer, use the average size obtained for the library. 
## • For all other qualification methods, use 600 bp as the average library size. 
2. Using the molarity value, calculate the volumes of RSB and library needed to dilute libraries to the starting concentration for your system. 
Sequencing System Starting Concentration (nM) Final Loading Concentration (pM) 
iSeq 100 (v1 reagents) 2 200 iSeq 100 (v2 reagents) 2 100 MiniSeq 2 1.2–1.3 
Document # 1000000025416 v12 
For Research Use Only. Not for use in diagnostic procedures. 
32 
Illumina DNA Prep Reference Guide Sequencing System Starting Concentration (nM) Final Loading Concentration (pM) 
MiSeq (v2 and v3 reagents) 4 12 MiSeq i100* 0.8 80 NextSeq 550 and NextSeq 500 2 1.2–1.3 NextSeq 2000 2 750 NovaSeq 6000 Refer to the NovaSeq 6000 documentation on the Illumina support site. Refer to the NovaSeq 6000 documentation on the Illumina support site. NovaSeq X 2 150 
> * Denaturation performed onboard. Refer to the system guide.
3. Dilute libraries using RSB: 
## • Libraries quantified as a multiplexed library pool —Dilute the pool to the starting concentration for your system. 
## • Libraries quantified individually —Dilute each library to the starting concentration for your system. Add 10 μl each diluted library to a tube to create a multiplexed library pool. 4. Follow the denature and dilute instructions for your system to dilute to the final loading concentration. 
## • For the iSeq 100 Sequencing System, refer to the system guide for dilution instructions (libraries are automatically denatured). 
## • Refer to the Illumina Denature and Dilute protocol generator and the Illumina support site for pool and denature instructions. 
## • The final loading concentrations are a starting point and general guideline. Optimize concentrations for your workflow and quantification method over subsequent sequencing runs or by flow cell titration. 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
33 
> Illumina DNA Prep Reference Guide
# Resources & References 
The support pages on the Illumina website provide software, training resources, product compatibility information, and the following documentation. Always check support pages for the latest versions. 
# Additional Resources 
Resource Description 
Index Adapters Pooling Guide Provides pooling guidelines and dual-index strategies for using the 10-base pair Illumina DNA/RNA UD Indexes. 
Illumina Adapter Sequences Provides the nucleotide sequences that comprise Illumina oligonucleotides used in Illumina sequencing technologies. 
# Revision History 
Document Date Description of Change 
1000000025416 v12 April 2026 • Corrections to Dilute Libraries to Staring Concentration section. • Added mixing details to Blood Lysis section. • Standardized thermal cycler specifications. 
Document # 1000000025416 v12 
For Research Use Only. Not for use in diagnostic procedures. 
34 
Illumina DNA Prep Reference Guide Document Date Description of Change 
1000000025416 v11 February 2025 • Added MiSeq v2 reagent information. • Added NovaSeq X and MiSeq i100 values to starting concentration tables. • Added optional accessory kits for IPB. • Added new versions of IDT for Illumina UDI sets A-D in kit contents and storage. • Updated Index Reagent kit name to Illumina DNA/RNA UD Indexes. • Updated blood, dried blood, and saliva sample information. • Updated thermal cycler information. • Updated additional resources documentation. • Reorganized moving Sample Input Recommendations sections to DNA Input Recommendations. • Reorganized the Consumables and Equipment sections and updated verbiage for consistency across all library prep documentation. • Converted to HTML format. • Removed list of acronyms. • Removed IDT for Illumina Nextera DNA Unique Dual (UD) references. • Removed Adapter Blocking Reagents. • Removed EOL hardware. 1000000025416 v10 August 2021 • Changed Sample Purification Beads (SPB) to Illumina Purification Beads (IPB). • Updated the Library prep reagents part numbers for Illumina DNA Prep (24 Samples) and Illumina DNA Prep (96 Samples). • Added the equation to calculate molarity. 1000000025416 v09 June 2020 • Added dilution information for the NextSeq 2000 Sequencing System. • Added information for IDT for Illumina Nextera Indexes. 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
35 
> Illumina DNA Prep Reference Guide
Document Date Description of Change 
1000000025416 v08 May 2020 • Changed product name from Nextera DNA Flex to Illumina DNA Prep. • Renamed index and reagent kits. • Updated catalog numbers for UD Index kits sets C and D. • Removed obsolete UD Index sets A-D kit option. • Updated the Additional Resources to remove document # 1000000070581, which applies only to the Illumina DNA Prep with Enrichment protocol. 1000000025416 v07 May 2019 • Added information on the IDT for Illumina Nextera Indexes Sets B, C, and D including kit information and preparation procedures. • Revised Additional Resources section to provide more clarity on the resources available. • Revised Prepare for Pooling to provide more clarity on the pooling information. • Included TWB pipetting technique information in steps. • Clarified language throughout document to provide consistency throughout Nextera guides. Document # 1000000025416 v06 March 2019 Corrected PTC program thermal cycler temperature. 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
36 
> Illumina DNA Prep Reference Guide
Document Date Description of Change 
Document # 1000000025416 v05 March 2019 • Corrected loading concentration values. • Added information about separate workflow component requirements, DNA purity assessment, and about quantification and normalization of libraries. • Added Local Run Manager Guide to additional resources. • Added reagent overage information and PTC program settings to tagmentation step. • Revised tagmentation amplification to include AMP program information and correct multichannel pipette volume. • Revised workflow diagram to include RSB reagents. • Revised cleanup step to include separate steps for small PCR amplicons and standard DNA input and to correct safe stopping storage days. • Removed "Chapter 3 Sequencing." • Added supplementary IPB step to Analytical Fragment Analyzer. • Revised final loading concentrations in dilute libraries step. • Added information about reagent storage temperature to ensure performance. • Added new table with component and kit information and re-organized index kit information. • Added Fragment Analyzer and Bioanalyzer to consumables table, added Fragment Analyzer and Agilent Technologies to equipment table, and added CD and UD acronyms. Document # 1000000025416 v04 October 2018 Corrected average library size. 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
37 
> Illumina DNA Prep Reference Guide
Document Date Description of Change 
Document # 1000000025416 v03 October 2018 • Updated Index Adapter terminology. • Updated to include IDT® for Illumina®-Nextera™ DNA UD Indexes Set A (96 Indexes, 96 Samples). • Updated diluting to starting concentration information. • Added clarification regarding ordering index adapters. • Added additional resource information for Unique Dual Indexes. • Added catalog number information for IDT® for Illumina®-Nextera™ DNA UD Indexes Set A (96 Indexes, 96 Samples) and Axygen® 1.7 mL MaxyClear Snaplock Microcentrifuge Tubes. • Updated storage information for Lysis Reagent Kit. • Clarified PCR Amplicons information. • Clarified instructions when safe stopping is an option. • Moved recommended read lengths for each system to the support site. • Moved blood and lysis consumables to their own table. • Revised step-by-step instructions to be more succinct. • Reorganized the following content to improve continuity: • Rearranged DNA input recommendations. • Moved information on blood and saliva lysis preparation and procedures. Document # 1000000025416 v02 June 2018 Added information about PCR Amplicons. Document # 1000000025416 v01 April 2018 Replaced references to the Nextera DNA Flex Pooling Guide (document # 1000000031471) with the Index Adapters Pooling Guide (document # 1000000041074) . Pooling information is consolidated into the Index Adapters Pooling Guide. 
Document # 1000000025416 v00 October 2017 Initial release. 
> Document # 1000000025416 v12
> For Research Use Only. Not for use in diagnostic procedures.
38 
> Illumina DNA Prep Reference Guide
Illumina, Inc. 5200 Illumina Way San Diego, California 92122 U.S.A. +1.800.809.ILMN (4566) +1.858.202.4566 (outside North America) techsupport@illumina.com www.illumina.com 
For Research Use Only. Not for use in diagnostic procedures. 
© 2026 Illumina, Inc. All rights reserved. 
Document # 1000000025416 v12