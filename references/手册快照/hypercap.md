# KAPA HyperCap Workflow
URL: https://rochesequencingstore.com/wp-content/uploads/2022/02/KAPA-HyperCap-Workflow.pdf
KAPA HyperCap Workflow v3. 2
# Instructions For Use with - KAPA HyperExome, - KAPA HyperCap Heredity Panel, - KAPA HyperChoice, and - KAPA HyperExplore Probes 
> For Research Use Only.
> Not for use in diagnostic procedures.
# R2
Contents 
The KAPA HyperCap Target Enrichment Probes package contains :
Component  Description 
KAPA HyperCap Target Enrichment Probes 
Biotinylated capture oligos designed 
against target regions in the genome. 
Storage and Stability 
• KAPA HyperCap Target Enrichement Probes are provided lyophilized and will need to be resuspended prior to first use, with the KAPA Probes Resuspension Buffer (sold separately). It is recommended to aliquot the probes into single-use volumes and freeze at –15°C to –25°C. 
• KAPA HyperCap Target Enrichment Probes are stable at –15°C to –25°C until the expiration date printed on the label, lyophilized or resuspended. 
Application 
KAPA HyperExome probes enable targeted enrichment of human coding exons. Refer to design-specific documentation and design files for more details on the specific exome design. The KAPA HyperExome probes utilize an empirically optimized design and deliver high-performance enrichment in terms of coverage and uniformity. The KAPA HyperCap Heredity panel is a 10 Mb capture target panel covering 3332 genes strongly associated with hereditary disease, plus the ClinVar pathogenic and likely pathogenic variants content. It provides an optimal balance between relevant content carefully selected by the Roche Sequencing Scientists and sequencing efficiency driven from exceptional uniformity and very low duplication rates. KAPA HyperChoice probes enable targeted enrichment of customer-defined regions of the human genome. Proprietary design algorithms improve capture uniformity and reduce the amount of sequencing needed to efficiently identify sequence variants. KAPA HyperChoice product is intended for capture of human target regions up to 200 Mb. KAPA HyperExplore product is intended for capture of up to 200 Mb of non-human genomic targets, non-standard (including repetitive and mitochondrial) human sequences or when the user defines the probe replication in the target regions. Refer to design-specific documentation and design files for more details on specific designs at www.hyperdesign.com .
Warnings and Precautions 
Changes to Previous Version 
Formatting changes. 
Ordering Information 
For complete overview of Roche Sequencing products, including those used in the KAPA HyperCap Workflow v3.2 go to sequencing.roche.com/products .
> KAPA HyperCap Workflow v3. 2
• Wear appropriate personal protective equipment, such as gloves, and safety glasses, to avoid direct contact while handling the reagents. 
• Use good laboratory practices to avoid contamination when working with the reagents. 
• Do not eat, drink or smoke in laboratory area. 
• In the event of a spill, clean up the solution with absorbent pads, allow pads to dry, and dispose of pads. Observe all national, regional, and local regulations for waste disposal and management. 3KAPA HyperCap W HyperCap Workflow v3. 2 3
Trademarks 
KAPA, HYPERCAP , HYPERCAPTURE, HYPEREXOME, HYPERCHOICE and HYPEREXPLORE are trademarks of Roche. All other product names and trademarks are the property of their respective owners. 
Contact and Support 
If you have questions, contact your local Roche Technical Support. Go to sequencing.roche.com/support for contact information. 
Copyright 
© 2015-2021 Roche Sequencing Solutions, Inc. All Rights Reserved. Roche Sequencing Solutions, Inc. 4300 Hacienda Drive Pleasanton, CA 94588 USA 
Editions 
Version 1.0, June 2016; Version 1.1, March 2017; Version 1.2, June 2017; Version 2.0, October 2017; Version 2.1, December 2017; Version 2.2, April 2018; Version 2.3, June 2018; Version 3, February 2020 ; October 2020; Version 3.1, July 2021 ; Version 3.2, September 2021 
Restrictions and Liabilities 
This document is provided “as is” and Roche Sequencing Solutions, Inc. (Roche) assumes no responsibility for any typographical, technical, or other inaccuracies in this document. Roche reserves the right to periodically change information that is contained in this document; however, Roche makes no commitment to provide any such changes, updates, enhancements, or other additions to this document to you in a timely manner or at all. 
OTHER THAN THE LIMITED WARRANTY CONTAINED IN THIS USER GUIDE, ROCHE MAKES NO REPRESENTATIONS, WARRANTIES, CONDITIONS OR COVENANTS, EITHER EXPRESS OR IMPLIED (INCLUDING WITHOUT LIMITATION, ANY EXPRESS OR IMPLIED WARRANTIES OR CONDITIONS OF FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, MERCHANTABILITY, DURABILITY, TITLE, OR RELATED TO THE PERFORMANCE OR NON-PERFORMANCE OF ANY PRODUCT REFERENCED HEREIN OR PERFORMANCE OF ANY SERVICES REFERENCED HEREIN). This document might contain references to third party sources of information, hardware or software, products, or services and/or third party web sites (collectively the “Third-Party Information”). Roche does not control, and is not responsible for any Third-Party Information, including, without limitation the content, accuracy, copyright compliance, compatibility, performance, trustworthiness, legality, decency, links, or any other aspect of Third-Party Information. The inclusion of Third-Party Information in this document does not imply endorsement by Roche of the Third-Party Information or the third party in any way. Roche does not in any way guarantee or represent that you will obtain satisfactory results from using Roche products as described herein. The only warranties provided to you are included in the Limited Warranty enclosed with this guide. You assume all risk in connection with your use of Roche products. Roche is not responsible nor will be liable in any way for your use of any software or equipment that is not supplied by Roche in connection with your use of Roche products. 
Conditions of Use 
You are responsible for understanding and performing the protocols described within. Roche does not guarantee any results you may achieve. These protocols are provided as Roche's recommendations based on its use and experience with Roche products. 
Use Restrictions 
For patent license limitations for individual products, refer to: www.technical-support.roche.com .4
# Table of Contents  
> KAPA HyperCap W HyperCap Workflow v3 .2 4
# Table of Contents 
Copyright . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
Editions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3Restrictions and Liabilities . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
Conditions of Use . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
Use Restrictions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 3
Preface __________________________________________________________________________________________________ 6
Regulatory Disclaimer . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
KAPA HyperCap Target Enrichment Probes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
Contact Information . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6Technical Support . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6Manufacturer and Distribution . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6Conventions Used in This Manual . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6Symbols . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
Text . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 6
Chapter 1. Before You Begin _______________________________________________________________________________ 7
Overview of the KAPA HyperCap Workflow v3. 2 . . . . . . . . . . . . . . . .. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 8Prepare the Following Equipment and Reagents . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9
Terminology . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9Protocol Information & Safety . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 9Required Equipment, Labware & Consumables . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10 Laboratory Equipment . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10 Consumables Available from Roche . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 10 
Consumables Purchased from Other Vendors . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 11 
Chapter 2. Prepare and Store the KAPA HyperCap Reagents __________________________________________________ 12 
Step 1. Store the Reagent Kits . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12 
Step 2. Resuspend & Aliquot the KAPA HyperCap Target Enrichment Probe s . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 12 
Step 3. Preparation of the KAPA UDI Primer Mixes . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 13 
Chapter 3. Prepare the Sample Library _____________________________________________________________________ 14 
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14 
Sample Requirements . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14 
Step 1. Prepare the Sample Library . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14 
Step 2a. If using the KAPA HyperPlus Kit. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 14 Step 2b. If using the KAPA HyperPrep Kit. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 17 
Contents . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
Storage and Stability . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
Application . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
Warnings and Precautions . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
Changes to Previous Version . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
Ordering Information . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
Trademarks . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2
Contact and Support . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25
# Table of Contents  
> KAPA HyperCap Workflow v3. 25
For <40 Mbp Capture Target Size . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 26
For ≥40 Mbp Capture Target Size . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 27
Step 3. Bind Hybridized DNA to the Capture Beads . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28
Step 4. Wash the Capture Beads Plus Bead-Bound DNA . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 28
Chapter 7. Amplify Enriched Singleplex or Multiplex DNA Sample ____________________________________________ 30 
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30 
Step 1. Resuspend the Post-Capture PCR Oligos . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30 
Step 2. Prepare the Post-Capture PCR Master Mix . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 30 
Step 3. Perform the Post-Capture PCR Amplification . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 31
Step 4. Purify the Amplified Enriched Singleplex or Multiplex DNA Sample using KAPA HyperPure Beads . . . . . . . . . . . . . . . 31
Step 5. Qualify the Amplified Enriched Singleplex or Multiplex DNA Sample Library . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 32
Appendix A. Troubleshooting _____________________________________________________________________________ 34
Appendix B. Limited Warranty _____________________________________________________________________________ 37
1. Limited Warranty . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 372. FURTHER LIABILITY LIMITATION . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 37
Appendix C. Products Overview ___________________________________________________________________________ 38
Chapter 6. Wash and Recover Captured Singleplex or Multiplex DNA _______________________________________ __ 26
Step 1. Prepare Wash Buffers . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 6
Step 2. Prepare the Capture Beads . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 6
Chapter 5. Hybridize the Sample to KAPA HyperCap Target Enrichment Probes _________________________________ 23
Step 1. Prepare for Hybridization . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 3
Step 2. Prepare the Singleplex or Multiplex DNA Sample Library Pool . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23 Step 3. Prepare the Sample for Hybridization. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 24 
Chapter 4. Amplify the Sample Library Using the KAPA UDI Primer Mixes _____________________________________ 19 
References . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19 Step 1. Prepare the Pre-Capture PCR Reaction . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 19 Step 2. Perform the Pre-Capture PCR Amplification .. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20 Step 3. Purify the Amplified Sample Library using KAPA HyperPure Beads .. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 20 Step 4. Qualify the Amplified Sample Library .. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 21
Step 4. Prepare the Hybridization Mix.. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 25 6
# Preface  
> KAPA HyperCap Workflow v3. 26
# Preface 
# Regulatory Disclaimer 
For Research Use Only. Not for use in diagnostic procedures. 
KAPA HyperCap Target Enrichment Probes 
KAPA HyperCap Target Enrichment Probes is a solution-based capture reagent that enables enrichment of the whole exome or custom er-defined regi ons of interest in a single tube. Throughout this document, ‘KAPA HyperCap Target Enrichment Probes’ refers to KAPA HyperExome, KAPA HyperCap Fixed Panels, KAPA HyperChoice, and KAPA HyperExplore products. 
# Contact Information 
Technical Support 
If you have questions, contact your local Roche Technical Support. Go to sequencing.roche.com/support.html for contact information. 
Manufacturer and Distribution 
Manufacturer  Roche Sequencing Solutions, Inc. 
Santa Clara, CA USA 
Distribution  Roche Diagnostics GmbH 
Mannheim, Germany 
Distribution in USA  Roche Diagnostics Corporation 
Indianapolis, IN USA 
# Conventions Used in This Manual 
Symbols 
Symbol  Description 
Important Note: Information critical to the success of the procedure or use of the product. Failure to follow 
these instructions could result in compromised data. 
Information Note: Designates a note that provides additional information concerning the current topic or 
procedure. 
Text 
Conventions  Description 
Numbered listing  Indicates steps in a procedure that must be performed in the order listed. 
Italic type, blue  Highlights a resource in a different area of this manual or on a web site. 
Italic type  Identifies the external general resources or names. 
Bold type  Identifies names of paragraphs, sections or emphasized words. KAPA HyperCap Workflow v3. 2 7
# Chapter 1. Before You Begin 
# Chapter 1. Before You Begin 
Th is Instructions for Use document describes the process for enrichment of individual or multiplexed genomic DNA (gDNA) sample libraries using any KAPA HyperCap Target Enrichment Probes and the amplification of these sample libraries by ligation-mediated PCR. Specifically, th ese Instructions for Use provide a protocol for the workflow outlined in 
Figure 1 using the KAPA HyperPrep Kit or KAPA HyperPlus Kit. Modification of certain workflow steps may be appropriate for individual experimental needs (contact your local support). The output of this protocol are enriched gDNA libraries that can be directly sequenced using an Illumina sequencing instrument. The KAPA Target Enrichment portfolio supported from the KAPA HyperCap Workflow v3. 2 provides: 
■ High performance based on proprietary probe design algorithms and optimized kits and reagents: 
• Enhanced capture uniformity • Fewer PCR duplicates 
• Deeper target coverage 
• Higher sensitivity in SNP detection 
■ An easy to use, streamlined, and automation friendly workflow with minimal resource requirements: 
• Moderate hybridization and wash temperatures 
• Independent of a vacuum concentrator 
• Streamlined washes 
■ Single vendor service and support for NGS sample preparation: 
• KAPA HyperPrep and KAPA HyperPlus Kits • KAPA Universal Adapter 
• KAPA UDI Primer Mixes 1-384 
• KAPA HyperPure Beads • KAPA HyperCapture Reagent and Bead Kits • KAPA HyperCap Target Enrichment Probes 
■ Catalog off-the-shelf, as well as customizable content through the HyperDesign Tool , an on-line custom design interface and a team of expert designers. KAPA HyperCap Workflow v3. 2 8
# Chapter 1. Before You Begin 
# Overview of the KAPA HyperCap Workflow v3. 2
The KAPA HyperCap Workflow v3. 2 involves: 
Processing Time Workflow Step 
Prepare the Sample Library: Mechanical Shearing (KAPA HyperPrep Kit) or 
Enzymatic Fragmentation (KAPA HyperPlus Kit) 
2.5 h 
Amplify and Purify the Sample Library Using the KAPA UDI Primer Mixes and KAPA HyperPure Beads  0.75 h 
Prepare the Multiplex DNA Sample Library Pool (if Multiplex ing Several Samples)  0.5 h 
Hybridize the Amplified Sample Library to KAPA HyperCap Target Enrichment Probes  0.5 h 
Wash and Recover Captured Multiplex DNA Sample Library  0.75 h 
Amplify and Purify the Enriched Multiplex DNA Sample Library  1 h 
Illumina Sequencing    
> Figure 1: KAPA HyperCap Workflow v3.2 , with mechanical or enzymatic DNA fragmentation. Where applicable, incubation times are indicated between steps. Processing time may vary based on the number of samples processed and multiplexing levels.
16 - 20 h incubation KAPA HyperCap Workflow v3. 2 9
# Chapter 1. Before You Begin 
• Thermocyclers should be programmed with the following: 
{ KAPA HyperPlus Kit 
• Fragmentation program ( Chapter 3 , Prepare the Sample Library, Step 2a.4) 
• End Repair and A-tailing program ( Chapter 3 , Prepare the Sample Library, Step 2a.6.e) 
• Adapter Ligation program ( Chapter 3 , Prepare the Sample Library, Step 2a.7.e) 
{ KAPA HyperPrep Kit 
• End Repair and A-tailing program ( Chapter 3 , Prepare the Sample Library, Step 2b.5.e) 
• Adapter Ligation program ( Chapter 3 , Prepare the Sample Library, Step 2b.6.e) 
{ Pre-Capture PCR program ( Chapter 4 , Amplify the Sample Library Using the KAPA UDI Primer Mixes, Step 2.7) 
{ Hybridization incubation program ( Chapter 5 , Hybridize the Sample and KAPA HyperCap Target Enrichment Probes, Step 4.7) 
{ Post-Capture PCR program ( Chapter 7 , Amplify Enriched Multiplex DNA Sample, Step 3.1) It is recommended to use a thermocycler with a programmable heated lid. For guidance on lid temperatures, please follow the recommended lid temperatures in these Instructions For Use. If further guidance is needed, please contact Roche Technical Support .
• Take the following steps before beginning the workflow: 
{ Resuspend and aliquot the KAPA HyperCap Target Enrichment Probes ( Chapter 2 , Prepare and store the KAPA HyperCap Reagents, Step 2) 
{ Preparation of the KAPA UDI Primer Mixes ( Chapter 2 , Prepare and store the KAPA HyperCap Reagents, Step 3) 
{ Resuspend the Post-Capture PCR Oligos ( Chapter 7 , Amplify Enriched Singleplex or Multiplex DNA Sample, Step 1) To verify you are using the most up-to-date version of these Instructions For Use 
to process your captures, go to sequencing.roche.com/support.html .
■ Wear gloves, lab coat, safety glasses and take precautions t o avoid sample contamination. 
■ Perform all centrifugations at room temperature (+15°C to +25°C). 
■ Unless otherwise specified, all mixing steps are listed as ‘mix thoroughly’ and indicate that mixing should be performed by either vortexing for 10 seconds or pipetting up and down 10 times. 
■ If liquid has collected in a tube’s cap after mixing, gently tap or briefly spin the sample to collect the liquid into the tube’s bottom, ensuring that the mixture remains homogeneous before progressing to the next step. 
■ It is recommended to perform thermocycler incubations using a thermocycler with a programmable heated lid set to the provided temperature. 
# Protocol Information & Safety Terminology 
Target Enrichment (or Capture): The process of selecting targeted regions from genomic DNA. In the context of this document, the hybridization of the Amplified Sample Library to the KAPA HyperCap Target Enrichment Probes, and subsequent washing steps. 
KAPA HyperCap Target Enrichment Probes: The complete set of biotinylated 120 bp oligonucleotide probes (KAPA HyperExome, KAPA HyperCap Fixed Panels, KAPA HyperChoice or HyperExplore) provided by Roche for target enrichment. 
Sample Library: The initial shotgun library generated from genomic DNA by fragmentation and ligation of sequencing platform-specific adapters. In the context of this document, this is the sample library before amplification and prior to capture. 
Amplified Sample Library: The sample library after amplification by adapter ligation-mediated PCR but before capture. 
UDI Primer Mixes: Unique Dual-Indexed Primer Mixes .
# Prepare the Following Equipment and Reagents KAPA HyperCap Workflow v3. 2 10 
# Chapter 1. Before You Begin 
# Required Equipment, Labware & Consumables 
You assume full responsibility when using the equipment, labware, and consumables described below. This protocol is designed for use with the specified equipment, labware, and consumables. 
Laboratory Equipment 
Equipment  Supplier  Catalog No. 
Covaris Ultra Sonicator 
(optional)  Covaris  Multiple models 
(e.g.  S220, E220) 
DynaMag-2 Magnet 
(16 x 2.0 mL tube holder) (optional) 
0.2 mL PCR Strip Magnetic Separator Rack 
Thermo Fisher  12321D 
DynaMag-96 Side Magnet  Thermo Fisher  12331D 
Microcentrifuge (16,000 x g capability)  Multiple Vendors 
Qubit Fluorometer  ThermoFisher  Multiple models 
Bioanalyzer 2100  Agilent 
Thermocycler (capable of maintaining +55°C for 16 - 20 hours) , with programmable heated lid  Multiple Vendors 
Vortex mixer  Multiple Vendors 
Consumables Available from Roche 
Component  Package Size/Contents  Catalog No. 
KAPA Universal Adapter  96 reactions 
384 reactions* 
09 063 781 001 
09 063 790 001 
KAPA HyperCapture Bead Kit 
09 075 780 001 
09 075 798 001 
09 075 909 001 
KAPA HyperCapture Reagent Kit 
24 reactions 
96 reactions 
384 reactions* 
09 075 810 001 
09 075 828 001 
09 075 917 001 
KAPA HyperPrep Kit 
8 reactions 
24 reactions 
96 reactions 
07 962 312 001 
07 962 347 001 
07 962 363 001 
KAPA HyperPlus Kit 
8 reactions 
24 reactions 
96 reactions 
07 962 380 001 
07 962 401 001 
07 962 428 001 
KAPA Universal Enhancing Oligos 
24 reactions 
96 reactions 
384 reactions* 
09 075 836 001 
09 075 852 001 
09 075 895 001 
KAPA HyperPure Beads 
5 mL 
30 mL 
60 mL 
4 x 60 mL 
450 mL 
08 963 835 001 
08 963 843 001 
08 963 851 001 
08 963 878 001 
08 963 860 001 
Plate Centrifuge which can reach at least 280 x g Multiple Vendors 
Permagen MSR812 
24 reactions 
96 reactions 
384 reactions* 
96 reactions 96 reactions 96 reactions 09 134 336 001 09 329 838 001 09 329 846 001 09 329 854 00 196 reactions KAPA UDI Primer Mixes 1-96 KAPA UDI Primer Mixes 97-192 KAPA UDI Primer Mixes 193-288 KAPA UDI Primer Mixes 289-384 
> * Virtual kits, consist of 4 x 96 reaction kits.
KAPA HyperCap Workflow v3. 2 11 
# Chapter 1. Before You Begin 
KAPA HyperExome Prep Kit 1
For 192 samples, contains: 2 x KAPA HyperPrep Kit 96 rxn – 07 962 363 001 2 x KAPA Universal Adapter, 15 μM 960 μL- 09 063 781 001 1 x KAPA HyperPure Beads Kit (30 ml) - 08 963 843 001 1 x KAPA HyperPure Beads Kit (5 ml) - 08 963 835 001 1 x KAPA HyperExome, 24 rxn – 09 062 556 001 1 x KAPA Probes Resuspension Buffer – 09 075 879 001 1 x KAPA HyperCapture Reagent Kit 24 rxn – 09 075 810 001 1 x KAPA HyperCapture Bead Kit 24 rxn – 09 075 780 001 
09 107 592 001 
KAPA HyperExome Plus Kit 1
For 192 samples, contains: 
2 x KAPA HyperPlus Kit 96 rxn – 07 962 428 001 2 x KAPA Universal Adapter, 15 μM 960 μL- 09 063 781 001 1 x KAPA HyperPure Beads Kit (30 ml) - 08 963 843 001 1 x KAPA HyperPure Beads Kit (5 ml) - 08 963 835 001 1 x KAPA HyperExome, 24 rxn – 09 062 556 001 1 x KAPA Probes Resuspension Buffer – 09 075 879 001 1 x KAPA HyperCapture Reagent Kit 24 rxn – 09 075 810 001 1 x KAPA HyperCapture Bead Kit 24 rxn – 09 075 780 001 
09 107 606 001   
> * Virtual kits, consist of 4 x 96 reaction kits.
> 1Virtual kit, contains required reagents for 192 samples, does not include the KAPA UDI Primer Mixes, which ha ve to be ordered separately.
Consumables Purchased from Other Vendors 
Component  Supplier  Package Size  Catalog No. 
Agilent DNA 1000 Kit  Agilent  1 kit  5067-1504 
Agilent High Sensitivity DNA Kit (recommended)  Agilent  1 kit  5067-4626 
10 mM Tris-HCl, pH 8.0  Multiple Vendors 
Ethanol, 200 proof (absolute), for molecular biology  500 mL 
Covaris microTUBEs (required only if using KAPA HyperPrep Kit)  Covaris, Inc.  1 package of 25 
tubes 
520166, 520167, 
52174, 520168 
TE Buffer (low EDTA): 10 mM Tris-HCl, 0.1 mM EDTA pH 8.0, (required only if using KAPA HyperPrep Kit)  Multiple Vendors  100 mL 
Qubit dsDNA HS Assay Kit  ThermoFisher  1 kit  Q32851 
Qubit Assay Tubes  ThermoFisher  1 package of 500 
tubes  Q32856 
Tubes: 
■ 0.2 mL PCR tubes or strip-tubes, (preferably low-bind) 
■ 1.5 mL microcentrifuge tubes (optional) 
Multiple Vendors 
Water, PCR Grade  Sigma-Aldrich 
1 x 25 mL 
25 x 1 mL 
4 x 25 mL 
03315959001 
03315932001 
03315843001 
Use nuclease-free, PCR Grade water for all described protocol steps. Working with a liquid handler system may require excess volumes from various reagents. 
KAPA Hybrid Enhancer Reagent 1 mL 09 075 763 001 
KAPA Probes Resuspension Buffer 1 mL 
5 mL 09 075 879 001 
09 075 887 001 
KAPA HyperCap Target Enrichment Probes 
Multiple Multiple, 
Please see Appendix C .
Component Package Size/Contents Catalog No. 
Sigma-Aldrich E7023-500ML KAPA HyperCap Workflow v3. 2 12 
# Chapter 2. Prepare and Store the KAPA HyperCap Reagents 
# Chapter 2. Prepare and Store the KAPA HyperCap Reagents 
This chapter describes the storage conditions for the following kits: 
■ KAPA UDI Primer Mixes 
■ KAPA Probes Resuspension Buffer 
■ KAPA HyperCapture Reagent Kit 
# Step 1. Store the Reagent Kits 
Reagent Kit  Storage Temperature 
KAPA HyperCapture Bead Kit  +2°C to +8°C 
KAPA HyperPure Beads  +2°C to +8°C 
KAPA HyperCapture Reagent Kit  -15 °C to -25°C 
KAPA Universal Adapter  -15 °C to -25°C 
KAPA UDI Primer Mixes or KAPA UDI Primer Mixes (resuspended) 
+2°C to +8°C or 
KAPA Probes Resuspension Buffer  -15 °C to -25°C 
KAPA Hybrid Enhancer Reagent (if using KAPA HyperExplore with non human targets ) -15 °C to -25°C 
KAPA HyperPrep Kit  -15 °C to -25°C 
KAPA HyperPlus Kit  -15 °C to -25°C 
1. Review the KAPA HyperCap Target Enrichment Probes tube label to verify the probe reaction number and resuspension volume. 2. Spin the KAPA HyperCap Target Enrichment Probes tube at 10,000 x g for 30 seconds to ensure the contents are at the bottom of the tube. 3. Add the recommended volume of KAPA Probes Resuspension Buffer indicated on the tube label to the KAPA HyperCap Target Enrichment Probes tube. 4. Vortex the tube for 1 minute to resuspend the probe pool. 5. Centrifuge the tube at 10,000 x g for 30 seconds to ensure that the liquid is at the bottom of the tube before removing the cap. 6. Aliquot the KAPA HyperCap Target Enrichment Probes into single-use aliquots (4 μL/capture) into 0.2 mL PCR tubes and store at -15°C to -25°C until use. The presence of some residual volume after dispensing all single-use aliquots is normal. 7. When ready to perform the hybridization portion of the experiment, thaw the required number of single-use probe pool aliquots on ice. The KAPA HyperCap Target Enrichment Probes should not undergo freeze/thaw cycles after aliquoting. 
The KAPA HyperCapture Bead kit must not be frozen. 
-15 °C to -25°C 
KAPA HyperCap Target Enrichment Probes or KAPA HyperCap Target Enrichment Probes (resuspended) -15 °C to -25°C 
# Step 2. Resuspend and Aliquot the KAPA HyperCap Target Enrichment Probe s
Store the KAPA HyperCap Target Enrichment Probes in their lyophilized form at -15°C to -25°C until ready to use. Before first use of the KAPA HyperCap Target Enrichment Probes, undertake the following steps to ensure the highest performance and to avoid multiple freeze/thaw cycles or potential accidental contamination: 
■ KAPA Universal Adapter 
■ KAPA HyperPure Beads 
■ KAPA HyperPrep Kit or KAPA HyperPlus Kit 
■ KAPA HyperCapture Bead Kit 
Ensure that you properly label and record the expiration date of the aliquoted probes. KAPA HyperCap Workflow v3. 2 13 
# Chapter 2. Prepare and Store the HyperCap Reagents 
# Step 3. Preparation of the KAPA UDI Primer Mixes 
Before use of the KAPA UDI Primer Mixes, undertake the following steps to resuspend the primers: 
1. Retrieve the KAPA UDI Primer Mixes plate from storage (+2°C to +8°C). 
2. Spin the KAPA UDI Primer Mixes plate at 280 x g for 1 minute to ensure the contents are at the bottom of the wells. 
3. Before removing the foil cover, please ensure the plate is in the correct orientation before proceeding. In order to have well position A1 on the top left corner, the notched corner must be facing the user on the bottom left, as shown in 
Figure 2 .
4. Carefully remove the foil cover on the plate ensuring to avoid cross contamination. Discard the original foil cover. 
5. Using a multichannel pipette, add 10 μL of PCR Grade water directly to the bottom of each well and discard tips after dispensing. 
A new pipette tip must be used for each well to avoid cross contamination. Be sure to dispense water slowly to the bottom of each well to avoid liquid splash over to adjacent wells. 
6. Ensure every well contains 10 μL of PCR grade water and cover the plate with one of the adhesive foil seals provided 
in the kit. 
Make sure the foil seal is properly aligned and fully covers all 96 wells. Failure to do so can lead to cross contamination of the KAPA UDI Primer Mixes. 
Keep the plate upright. 
> Figure 2: KAPA UDI Primer Mixes plate layout.
7. Use a roller or appropriate tool to ensure the foil seal is evenly applied. 
8. Spin the plate at 280 x g for 30 seconds to ensure the dispensed 10 μL are at the bottom of the well. 
9. Thoroughly vortex the plate ensuring all wells are mixed well. Ensure wells at the corners of the plate are mixed well by vortexing the corners of the plate. 
10. Spin the plate at 280 x g for 1 minute to ensure the contents are collected at the bottom of the wells. 
11. The KAPA UDI Primer Mixes plate is now ready for use in the pre-capture PCR step. 
12. Store any unused but already resuspended KAPA UDI Primer Mixes at -15°C to -25°C. To avoid repeated freeze/thaw cycles you may transfer the resuspended primers to separate tubes or tube strips for storage. 
Ensure aliquoted KAPA UDI Primer Mixes are correctly labeled. KAPA HyperCap Workflow v3. 2 14 
# Chapter 3. Prepare the Sample Library 
# Chapter 3. Prepare the Sample Library 
This chapter describes the two alternative sample library preparation methods. If mechanically fragmenting the gDNA with a Covaris focused-ultrasonicator, use the KAPA HyperPrep Kit. The KAPA HyperPlus Kit is used for enzymatically fragmenting gDNA. This chapter requires use of components from the following kits: 
■ KAPA HyperP lus Kit or KAPA HyperP rep Kit 
■ KAPA Universal Adapter 
■ KAPA UDI Primer Mixes 
■ KAPA HyperPure Beads 
Ensure that the following are available: 
■ TE Buffer (low EDTA): 10 mM Tris-HCl, 0.1 mM EDTA pH 8.0 (KAPA HyperPrep Kit, only) 
■ PCR Grade water 
■ Freshly-prepared 80% ethanol 
■ 10 mM Tris-HCl, pH 8.0 
# References 
■ Covaris Focused-ultrasonicator User’s Guide 
■ Thermocycler Manual 
# Sample Requirements 
This workflow was validated with 100 ng of high quality gDNA for sample library preparation. The gDNA should be quantified by using the Qubit dsDNA HS Assay Kit. Lower input amounts and sample quality may not yield equivalent results. For guidance on lower input amounts or sample quality, contact Roche Technical Support .
# Step 1. Prepare the Sample Library 
■ With the KAPA HyperPlus Kit – integrated enzymatic fragmentation, or 
■ With the KAPA HyperPrep Kit – mechanical fragmentation (skip Step 2a below) 
# Step 2a. If using the KAPA HyperPlus Kit 
Make sure the KAPA HyperPure Beads are removed from storage to allow time for proper equilibration to room temperature. For best performance, store the beads protected from light when not in use. When assembling a master mix for processing multiple samples, always prepare an appropriate excess (5% to 10% for manual workflows and ~20% for automated liquid handling). The fragmentation parameters in th ese Instructions For Use are provided as a starting point and may not result in the optimal size distribution for libraries prepared for your specific DNA samples. Fragment the gDNA so that the average DNA fragment size is 180 – 220 bp. Enzymatic fragmentation is very sensitive to the presence of EDTA, which must be removed or neutralized 
prior to fragmentation. 
Please refer to the KAPA HyperPlus Kit Technical Data Sheet for further guidance on fragmentation optimization and EDTA removal from samples. KAPA HyperCap Workflow v3. 2 15 
# Chapter 3. Prepare the Sample Library 
1. Dilute 100 ng of gDNA with 10 mM Tris-HCl, pH 8.0 to a total volume of 35 μL in to a 0.2 mL tube or well of a PCR plate. 
2. Assemble each Fragmentation Reaction on ice by adding the components in the order shown: 
Component  Volume 
100 ng gDNA  35 μL 
KAPA Frag Buffer (10x)  5 μL 
KAPA Frag Enzyme  10 μL  
> Total 50 μL
The KAPA Frag Buffer and KAPA Frag Enzyme may be pre-mixed and kept on ice 
prior to reaction setup and dispensed as a single solution. Please note that 
the volume of the buffer is less than the volume of the enzyme in this reaction. 
3. Mix the Fragmentation Reaction thoroughly and return the plate/tube(s) on ice. Proceed immediately to the next step. 
4. Incubate in a thermocycler, pre-cooled to +4°C and programmed as outlined below. Set the lid temperature to ≤ +50°C: 
1. Pre-cool block: +4°C 
2. Fragmentation: 25 minutes at +37°C 
3. Hold: +4°C 
5. Quickly transfer the reaction on ice and proceed immediately to the next step. 
6. Perform End Repair and A-Tailing Reaction as follows: 
a. Prepare a master mix of the following reagents: 
End Repair & A-Tailing Master Mix  Per Individual 
Sample 
KAPA End Repair & A-Tailing Buffer  7 μL 
KAPA Hyper Plus End Repair & A-Tailing Enzyme Mix (orange cap color) 
> 3 μL
> 10 μL
Ensure the KAPA HyperPlus End Repair & A-Tailing Enzyme Mix is used for best performance. 
b. Add 10 μL of End Repair and A-Tailing Master Mix to the fragmented DNA sample to obtain a total volume of 60 μL. c. Mix the End Repair and A-Tailing Reaction thoroughly and perform a quick spin. d. Place on ice and immediately proceed to next step. e. Perform the End Repair and A-Tailing incubation in a thermocycler using the following program with the lid temperature set to +85°C: 1. Step 1: 30 minutes at +65°C 2. Step 2: Hold at +4°C f. Following the 30 minutes incubation, proceed immediately to the next step. 
7. Proceed with the Adapter Ligation Reaction: 
a. Prepare the Ligation Master Mix of the following reagents: 
Ligation Master Mix  Per Individual Sample 
KAPA Ligation Buffer  30 μL 
KAPA DNA Ligase  10 μL  
> Total 40 μL
Total 
The KAPA HyperPrep Ligation Buffer is very viscous and requires special attention during pipetting. KAPA HyperCap Workflow v3. 2 16 
# Chapter 3. Prepare the Sample Library 
c. Add 40 μL of the Ligation Master Mix to each well containing sample and KAPA Universal Adapter, resulting in a total volume of 110 μL. 
d. Mix the Ligation Reaction thoroughly and perform a quick spin. 
e. Incubate the Ligation Reaction at +20°C for 15 minutes with lid temperature set to +50°C. 
f. Following the incubation, proceed immediately to the next step. 
8. Perform the Post-Ligation Cleanup as follows: a. To each Ligation Reaction, add 88 μL of room temperature KAPA HyperPure Beads that have been thoroughly resuspended. 
Post-Ligation Cleanup  Per Individual Sample 
Ligation Reaction  110 μL 
KAPA HyperPure Beads  88 μL  
> Total 198 μL
b. Mix the Ligation Reaction and the KAPA HyperPure Beads mixture thoroughly and perform a quick spin. 
Ensure that the solution is thoroughly mixed and appears homogenous. Insufficient mixing may compromise recovery and size selection. 
c. Incubate at room temperature for 5 minutes to allow the DNA to bind to the beads. 
d. Place the tube(s) on a magnet to c ollect the beads. Incubate until the liquid is clear. 
e. Carefully remove and discard the supernatant. 
f. Keeping the tube(s) on the magnet, add 200 μL of freshly-prepared 80% ethanol. 
g. Incubate at room temperature for ≥30 seconds. 
h. Carefully remove and discard the ethanol. 
i. Keeping the tube(s) on the magnet, add 200 μL of freshly-prepared 80% ethanol. 
j. Incubate at room temperature for ≥30 seconds. 
k. Carefully remove and discard the ethanol. Remove residual ethanol without disturbing the beads. 
l. Allow the beads to dry at room temperature, sufficiently for all the ethanol to evaporate. 
Caution: Over-drying the beads may result in dramatic yield loss. 
m. Remove the tube(s) from the magnet. 
n. Thoroughly resuspend the beads in 22 μL of 10 mM Tris-HCl, pH 8.0. 
o. Incubate at room temperature for 2 minutes to allow the DNA to elute off the beads. 
p. Place the tube(s) on the magnet to collect the beads. Incubate until the liquid is clear. 
q. Transfer 20 μL of the eluate to a fresh tube/well. 
r. Proceed immediately to  Chapter  4. Amplify The Sample Library Using the KAPA UDI Primer Mixes. 
b. Add 10 μL of KAPA Universal Adapter to wells containing a sample from the previous step. 
The KAPA Universal Adapter must be added to each well individually prior to addition of the Ligation Master Mix. Addition of the KAPA Universal Adapter to the Ligation Master Mix will cause formation of adapter dimers. 
The KAPA Universal UMI Adapter may be used instead of the KAPA Universal Adapter in somatic 
oncology research applications. Follow the Instructions For Use of the KAPA HyperCap FFPET DNA Workflow or the KAPA HyperCap cfDNA Workflow, instead. Sample indexes are incorporated in the Pre-Capture Amplification step. Precautions should be taken to avoid sample cross contamination. KAPA HyperCap Workflow v3. 2 17 
# Chapter 3. Prepare the Sample Library 
Make sure the KAPA HyperPure Beads are removed from storage to allow time for proper equilibration to room temperature. For best performance, store the beads protected from light when not in use. When assembling a master mix for processing multiple samples, always prepare an appropriate excess (5 to 10% for manual workflows and ~20% for automated liquid handling). 
1. Transfer 100 ng of the gDNA sample into a 0.2 mL tube. 2. Adjust the volume to a total of 55 μL using TE Buffer (low EDTA) and transfer to a Covaris microTUBE-50 for fragmentation. For other Covaris shearing consumables, please consult the Covaris user manual for guidance. 3. Fragment the gDNA to achieve an average DNA fragment size between 180 – 220 bp. Consult manufacturer’s instructions for appropriate parameters to achieve this size distribution. 4. Transfer 50 μL of the fragmented DNA to a 0.2 mL PCR tube or well of a PCR plate. Proceed immediately to the next step. 5. Perform the End Repair and A-Tailing Reaction as follows: a. Prepare a master mix of the following reagents: 
End Repair and A-tailing Master Mix  Per Individual Sample 
KAPA End Repair & A-Tailing Buffer  7 μL 
KAPA End Repair & A-Tailing Enzyme Mix (purple cap)  3 μL  
> Total 10 μL
6. Perform the Adapter Ligation Reaction as follows: a. Prepare a master mix of the following reagents and set aside: 
Ligation Master Mix  Per Individual Sample 
KAPA Ligation Buffer  30 μL 
KAPA DNA Ligase  10 μL  
> Total 40 μL
b. First, add 10 μL of the KAPA Universal Adapter to each well containing a sample from the previous step. 
b. Add 10 μL of End Repair and A-Tailing Master Mix to the fragmented DNA sample to obtain a total volume of 60 μL. c. Mix the End Repair and A-Tailing Reaction thoroughly. d. Place on ice and immediately proceed to the next step. e. Perform the End Repair and A-Tailing incubation in a thermocycler using the following program with the lid temperature set to +85°C 1. Step 1: 30 minutes at +20°C 2. Step 2: 30 minutes at +65°C 3. Step 3: Hold at +4°C f. Following the 60 minutes incubation proceed immediately to the next step. 
The KAPA Universal Adapter must be added to each well individually prior to addition of the Ligation Master Mix. Addition of the KAPA Universal Adapter to the Ligation Master Mix will cause formation of adapter dimers. The KAPA Universal UMI Adapter may be used instead of the KAPA Universal Adapter in somatic oncology research applications. Follow the Instructions For Use of the KAPA HyperCap FFPET DNA Workflow or the KAPA HyperCap cfDNA Workflow, instead. 
# Step 2b. If using the KAPA HyperPrep Kit 
The KAPA HyperPrep Ligation Buffer is very viscous and requires special attention during pipetting. KAPA HyperCap Workflow v3. 2 18 
# Chapter 3. Prepare the Sample Library 
7.  Perform the Post-Ligation Cleanup as follows: 
a.  To each Ligation Reaction, add 88 μL room temperature, thoroughly resuspended, KAPA HyperPure Beads. 
Post Ligation Cleanup  Per Individual Sample 
Ligation Reaction  110 μL 
KAPA HyperPure Beads  88 μL  
> Total 198 μL
b. Mix the Ligation Reaction product and the KAPA HyperPure Beads thoroughly and perform a quick spin. 
Ensure that the solution is thoroughly mixed and appears homogenous. Insufficient mixing may compromise recovery and size selection. 
c. Incubate at room temperature for 5 minutes to allow the DNA to bind to the beads. 
d. Place the tube(s) on the magnet to c ollect the beads. Incubate until the liquid is clear. 
e. Carefully remove and discard the supernatant. 
f. Keeping the tube(s) on the magnet, add 200 μL of freshly-prepared 80% ethanol. 
g. Incubate at room temperature for ≥30 seconds. 
h. Carefully remove and discard the ethanol. 
i. Keeping the tube(s) on the magnet, add 200 μL of freshly-prepared 80% ethanol. 
j. Incubate at room temperature for ≥30 seconds. 
k. Carefully remove and discard the ethanol. Remove residual ethanol without disturbing the beads. 
l. Allow the beads to dry at room temperature, sufficiently for all the ethanol to evaporate. 
Caution: Over -drying the beads may result in dramatic yield loss. 
m. Remove the tube(s) from the magnet. 
n. Thoroughly resuspend the beads in 22 μL of 10 mM Tris-HCl, pH 8.0. 
o. Incubate at room temperature for 2 minutes to allow the DNA to elute off the beads. 
p. Place the tube(s) on the magnet to c ollect the beads. Incubate until the liquid is clear. 
q. Transfer 20 μL of the eluate to a fresh tube/well. 
r. Proceed immediately to Chapter 4 . Amplify The Sample Library Using the KAPA UDI Primer Mixes. 
Sample indexes are incorporated in the Pre-Capture Amplification step. Precautions should be taken to avoid sample cross contamination. 
c. Add 40 μL of Ligation Master Mix to each well containing a sample and KAPA Universal Adapter, resulting in a total volume of 110 μL. 
d. Mix the Ligation Reaction thoroughly and perform a quick spin. 
e. Incubate the Ligation Reaction at +20°C for 15 minutes with the lid temperature set to +50°C. 
f. Following the incubation, proceed immediately to the next step. KAPA HyperCap Workflow v3. 2 19 
# Chapter 4. Amplify the Sample Library Using the KAPA UDI Primer Mixes 
# Chapter 4. Amplify the Sample Library Using the KAPA UDI Primer Mixes 
This chapter describes how to amplify the sample library using the KAPA UDI Primer Mixes in preparation for hybridization to the KAPA HyperCap Target Enrichment Probes. This chapter requires the use of the components from the following kits: 
■ KAPA HyperPrep Kit or KAPA HyperPlus Kit 
■ KAPA UDI Primer Mixes 
■ KAPA HyperPure Beads 
Ensure that the following is available: 
■ Freshly-prepared 80% ethanol 
■ PCR Grade water 
# References 
■ Thermocycler Manual 
■ Qubit Fluorometer Manual 
■ Qubit dsDNA HS Assay Kit Guide 
■ Agilent 2100 Bioanalyzer Instrument Manual 
■ Agilent Bioanalyzer DNA Kits Guide 
# Step 1. Prepare the Pre-Capture PCR Reaction 
We recommend the inclusion of negative (water) and positive (previously amplified library) 
controls in the Pre-Capture PCR step. 
For guidance on pre-capture and post-capture sample multiplexing, please refer to the 
KAPA UDI Primer Mixes  Instructions for Use .
Make sure the KAPA HyperPure Beads are removed from storage to allow time for proper equilibration to room temperature. For best performance, store the beads protected from light when not in use. Ensure to record the well position of the KAPA UDI Primer Mix used for each sample. 
1. Retrieve and thaw the KAPA UDI Primer Mixes plate prepared in  Chapter  2, Step 3 .2. Spin the plate at 280 x g for 30 seconds to collect the contents to the bottom of the wells. 3. Peel off or pierce the foil seal for the appropriate number of wells needed. 
If piercing the foil seal, avoid cross contamination by using a new pipette tip for every well. 
4. Add 5 μL of a KAPA UDI Primer Mix to each individual Sample Library. 5. Add 25 μL of KAPA HiFi HotStart ReadyMix to each mixture of Sample Library and KAPA UDI Primer Mixes. 6. Mix thoroughly and perform a quick spin. Immediately proceed to amplification. 
If only using a subset of the KAPA UDI Primer Mixes from the original plate , remove and discard residual primers from the well and apply a new adhesive foil seal provided in the kit. Proper re-sealing and storage of the KAPA UDI Primer Mixes plate is necessary for unused primer mixes utilization at a later date. KAPA HyperCap Workflow v3. 2 20 
# Chapter 4. Amplify the Sample Library Using the KAPA UDI Primer Mixes 
# Step 2. Perform the Pre-Capture PCR Amplification 
7. Place the sample in the thermocycler and amplify using the following Pre-Capture PCR program with the lid temperature set to +105°C: 
• Step 1: 45 seconds at +98°C 
• Step 2: 15 seconds at +98°C 
• Step 3: 30 seconds at +60°C 
• Step 4: 30 seconds at +72°C 
• Step 5: Go to Step 2, Variable (see table below for recommendation) 
• Step 6: 1 minute at +72°C 
• Step 7: Hold at +4°C 
Library Preparation Kit  Go to Step 2: 
KAPA HyperPrep Kit  7 times (8 total cycles) 
KAPA HyperPlus Kit  5 times (6 total cycles) 
8. Proceed immediately to the next step. 
# Step 3. Purify the Amplified Sample Library using KAPA HyperPure Beads 
1. Add 70 μL of room temperature, thoroughly resuspended, KAPA HyperPure Beads to each Amplified Sample Library. 
2. Mix the Amplified Sample Library and KAPA HyperPure Beads thoroughly and perform a quick spin. 
Ensure that the solution is thoroughly mixed and appears homogenous. Insufficient mixing may compromise recovery and size selection. 
3. Incubate the tube(s) at room temperature for 5 minutes to allow the DNA to bind to the beads. 
4. Place the tube(s) on a magnet to c ollect the beads. Incubate until the liquid is clear. 
5. Carefully remove and discard the supernatant. 
6. Keeping the tube(s) on the magnet, add 200 μL of freshly-prepared 80% ethanol. 
7. Incubate at room temperature for ≥30 seconds. 
8. Carefully remove and discard the ethanol. 
9. Keeping the tube(s) on the magnet, add 200 μL of freshly-prepared 80% ethanol. 
10. Incubate at room temperature for ≥30 seconds. 
11. Carefully remove and discard the ethanol. Remove residual ethanol without disturbing the beads. 
12. Allow the beads to dry at room temperature, sufficiently for all of the ethanol to evaporate. 
Over-drying the beads may result in dramatic yield loss. 
13. Remove the tube(s) from the magnet. 
14. Thoroughly resuspend the beads in 32 μL of PCR Grade water. 
15. Incubate at room temperature for 2 minutes to allow the DNA to elute off the beads. 
16. Place the tube(s) on the magnet to c ollect the beads. Incubate until the liquid is clear. 
17. Transfer 30 μL of the supernatant to a new tube/well. 
18. Purified, Amplified Sample L ibraries can be stored at +2°C to +8°C for 1-2 weeks or at -15°C to -25°C for up to one month. KAPA HyperCap Workflow v3. 2 21 
# Chapter 4. Amplify the Sample Library Using the KAPA UDI Primer Mixes 
# Step 4. Qualify the Amplified Sample Library 
1. Make a 10-fold dilution of the Amplified Sample Library by combining 2 μL of library with 18 μL of PCR Grade water. 2. Utilize 5 μL of the diluted library with the Qubit dsDNA HS Assay Kit to obtain the concentration of the diluted library. Multiply by 10 to obtain results for the undiluted Amplified Sample Library. 
Accurate quantification is  essential  when working with samples that will be pooled for 
hybridization ( i.e.  pre-capture multiplexing). Slight differences in the mass of each sample 
combined to form the ‘Multiplex DNA Sample Library Pool’ will result in variations in the 
sequencing reads obtained for each sample in the library pool. 
• The undiluted Amplified Sample Library should contain ≥ 1000 ng of total DNA. If the library contains <1000 ng of total DNA, please refer to the troubleshooting section for guidance. 
• The negative control yield should be <1 ng/μL. 
3. Use 1 μL of the diluted Amplified S ample Library (and any controls) with an Agilent Bioanalyzer DNA High Sensitivity 
Kit . If using the Agilent Bioanalyzer DNA 1000 Kit, refer to the user manual for guidance. 
• Amplified Sample Libraries (p re-capture libraries ) should have an average fragment size distribution at ~320 bp (Figure 3, Figure 4) with a range setting at 150 to 1000 bp on the Bioanalyzer. Sharp peaks may be visible in the 
region <150 bp. These peaks correspond to unincorporated primers, primer-dimers or carryover adapter -dimers and 
will not interfere with the capture process. 
• The negative control should not show any signal above baseline within the 150 to 500 bp size range, which could 
indicate contamination between Amplified Sample Libraries, but it may exhibit sharp peaks visible below 150 bp. If 
the negative control reaction shows a positive signal by the Qubit measurement , but the Bioanalyzer trace indicates only the presence of a sharp peak below 150 bp, then the negative control should not be considered contaminated. 
4. If the Amplified Sample Library meets requirements, proceed to Chapter 5 . If the Amplified Sample Library does not 
meet these requirements, repeat the librar y preparation .  
> Figure 3: Example of an amplified KAPA HyperPlus sample library analyzed using the Agilent Bioanalyzer High Sensitivity DNA assay .
KAPA HyperCap Workflow v3. 2 22 
Figure 4: Example of an amplified KAPA HyperP rep sample library analyzed using the Agilent Bioanalyzer High Sensitivity DNA assay .
# Chapter 4. Amplify the Sample Library Using the KAPA UDI Primer Mixes KAPA HyperCap Workflow v3. 2 23
# Chapter 5. Hybridize the Sample to KAPA HyperCap Target Enrichment Probes 
# Chapter 5. Hybridize the Sample to KAPA HyperCap Target Enrichment Probes 
This chapter describes the hybridization of the Amplified Sample Libraries to the KAPA HyperCap Target Enrichment Probes. The following protocol provides instructions based on capture target size (found in coverage_summary.txt design deliverable file) and categorized as <40 Mbp or ≥40 Mbp panel capture target size. For optimal performance, it is recommended to review the panel design in HyperDesign and determine the hybridization conditions to follow before proceeding. This chapter requires the use of the components from the following kits: 
■ KAPA HyperCap Target Enrichment Probes 
■ KAPA HyperCapture Reagent Kit 
■ KAPA HyperCapture Bead Kit 
Ensure that the following are available: 
■ Freshly-prepared 80% ethanol 
■ PCR Grade water 
The hybridization protocol requires a thermocycler capable of maintaining +55°C for 16 to 20 
hours. A programmable heated lid is required. 
Note: In this chapter we use the term ‘Multiplex DNA Sample Library Pool’, however a single 
DNA sample library may be enriched using similar instructions. It is not required to capture 
more than one library at a time. 
# Step 1. Prepare for Hybridization 
1. Remove the appropriate number of 4 μL KAPA HyperCap Target Enrichment Probe aliquots (one per hybridization) from 
the -15°C to -25°C storage and allow them to thaw on ice. 
# Step 2. Prepare the Singleplex or Multiplex DNA Sample Library Pool 
1. Thaw on ice the Amplified DNA Sample Libraries that will be included in the capture experiment (generated in Chapter 4 ). 
2. Prepare the Singleplex / Multiplex DNA Sample Library by doing the following: 
a. For multiplex samples, mix together equal amounts (by mass) of each uniquely indexed Amplified DNA Sample 
Libraries to obtain a combined DNA mass of 1.5 μg ( i.e. for two-plex DNA Sample Library, mix together 750 ng of each uniquely indexed Amplified DNA Sample Library for a total mass of 1.5 μg). This mixture will subsequently be referred to as the ‘Multiplex DNA Sample Library Pool’. 
To obtain equal numbers of sequencing reads from libraries in the Multiplex DNA Sample Library Pool, it is very important to combine identical mass of each independently amplified DNA sample library at this step. Accurate quantification and pipetting are critical. 
b. If capturing a single sample, utilize 1000 ng of a uniquely indexed Amplified DNA Sample Library. 3. Add PCR Grade water to achieve a final volume 45 μL. If the Multiplex DNA Sample Library Pool exceeds 45 μL, please refer to the troubleshooting section for further guidance. KAPA HyperCap Workflow v3. 2 24
# Chapter 5. Hybridize the Sample to KAPA HyperCap Target Enrichment Probes 
Make sure the KAPA HyperPure Beads are removed from storage to allow time for proper equilibration to room temperature. For best performance, store the beads protected from light when not in use. Note: When working with non-human gDNA, consider using the KAPA Hybrid Enhancer Reagent (catalog number 09 075 763 001) in place of COT Human DNA. Optimization is needed when using the KAPA Hybrid Enhancer Reagent, but a good starting point is to add 20 μL of this reagent to each hybridization instead of COT Human DNA. 
1. Add 20 μL of COT Human DNA to the DNA Sample Library (or Pool ), for a total volume of 65 μL. 
2. Add 130 μL of KAPA HyperPure Beads to each tube/well containing the Amplified Sample Library and COT Human DNA mixture. 
3. Mix thoroughly by vortexing for 10 seconds and perform a quick spin. 
4. Incubate at room temperature for 10 minutes to ensure the Amplified Sample Library and COT Human DNA bind to the beads. 
5. Place the tube(s) on the magnet to c ollect the beads. Incubate until the liquid is clear. 
6. Carefully remove and discard the supernatant. 
7. Keeping the tube(s) on the magnet, add 200 μL of freshly-prepared 80% ethanol. 
8. Incubate at room temperature for ≥30 seconds. 
9. Carefully remove and discard the ethanol. Remove residual ethanol without disturbing the beads. 
10. Allow the beads to dry at room temperature, sufficiently for all the ethanol to evaporate. 
Caution: Over-drying the beads may result in dramatic yield loss. 
11. Add 13.4 μL of the Universal Enhancing Oligos to the bead-bound DNA sample. 
12. Remove the tube(s) from the magnet and mix thoroughly by vortexing. It is important that sufficient mixing is performed to result in a homogenous mixture. 
# Step 3. Prepare the Sample for Hybridization 
This step outlines how to prepare the sample for hybridization, by using KAPA HyperPure Beads. KAPA HyperCap Workflow v3. 2 25
# Chapter 5. Hybridize the Sample to KAPA HyperCap Target Enrichment Probes 
1. Prepare the Hybridization Master Mix following the tables below according to the capture target size .
a. For a KAPA HyperCap Target Enrichment design < 40 Mbp in capture target size, prepare a master mix of the following reagents: 
< 40 Mbp Capture Target Size – 
Hybridization Master Mix  Per Individual Capture 
Hybridization Buffer  28 μL 
Hybridization Component H  12 μL 
PCR Grade water  3 μL 
Total  43 μL 
b. For a KAPA HyperCap Target Enrichment design ≥ 40 Mbp in capture target size, prepare a master mix of the following reagents: 
≥ 40 Mbp Capture Target Size – 
Hybridization Master Mix  Per Individual Capture 
Hybridization Buffer  28 μL 
Hybridization Component H  9 μL 
PCR Grade water  6 μL 
Total  43 μL 
2. Add 43 μL of the Hybridization Master Mix to the tube(s) from step 3.12 above. 3. Mix thoroughly and perform a quick spin. Incubate at room temperature for 2 minutes. 
4. Place the tube(s) on the magnet to c ollect the beads. Incubate until the liquid is clear. 
5. Transfer 56.4 μL of the eluate (entire volume) into a new tube/well containing 4 μL of the KAPA HyperCap Target Enrichment Probe s.
Slight bead carryover may be observed when transferring the supernatant. 
This is unlikely to impact results. 
6. Mix thoroughly by vortexing for 10 seconds and perform a quick spin. 7. Perform the hybridization incubation in a thermocycler using the following program with the lid temperature set to +105°C: 
• +95°C for 5 minutes 
• +55°C for 16 to 20 hours 
The hybridization must remain at +55°C until it is transferred to the Capture Beads in Chapter 6 .
8. Continue to Chapter 6 . Wash and Recover Captured Singleplex or Multiplex DNA Sample For Washing and Recovery. 
# Step 4. Prepare the Hybridization Mix KAPA HyperCap Workflow v3. 2 26
# Chapter 6. Wash and Recover Captured Singleplex or Multiplex DNA Sample 
■ KAPA HyperCapture Reagent Kit 
■ KAPA HyperCapture Bead Kit 
Ensure that the following is available: 
■ Additional PCR Grade water for buffer preparation and elution 
# Step 1. Prepare Wash Buffers 
Volumes for an individual capture are shown here. When preparing 1X buffers for processing 
multiple reactions, prepare an excess volume of ~5% (automated liquid handling systems 
may require an excess of ~20%). 
1. Before completion of the hybridization incubation, thaw the Hybridization Wash Buffers. 
Ensure that stock wash buffers are not precipitated or cloudy. Allow sufficient time for the buffers to thaw. T horoughly vortex and warm cloudy buffers at 37°C until buffers are completely clear. 
2. Dilute 10X Wash Buffers (I, II, III and Stringent) and 2.5X Bead Wash Buffer, contained in the KAPA HyperCapture 
Reagent Kit, to create 1X working solutions. Volumes listed below are sufficient for one capture. 
Concentrated Buffer  Volume of 
Concentrated Buffer 
Volume of 
PCR Grade Water  Total Volume 
of 1X Buffer*  Temperature 
10X Stringent Wash Buffer  40 μL  360 μL  400 μL  +55°C 
10X Wash Buffer I  10 μL  90 μL  100 μL  +55°C 
20 μL  180 μL  200 μL  Room temp. 
10X Wash Buffer II  20 μL  180 μL  200 μL  Room temp. 
10X Wash Buffer III  20 μL  180 μL  200 μL  Room temp. 
2.5X Bead Wash Buffer  120 μL  180 μL  300 μL  Room temp. 
> *Store working solutions at room temperature (+15°C to +25°C) for up to 2 weeks. The volumes in this table are calculated for a single experiment; scale up accordingly if multiple samples are processed.
It is expected that excess volume of 1X Bead Wash Buffer will remain when following the < 40 Mbp Capture Target Size Capture Bead preparation protocol. 
3. To pre-warm the 1X Stringent Wash Buffer, make two aliquots of 200 μL in 0.2 mL tubes and place the tubes into a thermocycler set to +55°C. 
4. To pre-warm the 1X Wash Buffer I, make one aliquot of 100 μL into a 0.2 mL tube and place the tube into a thermocycler set to +55°C. 
5. Pre-warm the buffers for a minimum of 15 minutes. 
Pre-warming buffers can be performed in the same thermocycler used in the probe hybridization incubation step. 
# Step 2. Prepare the Capture Beads 
For <40 Mbp Capture Target Size 
1.  Allow the Capture Beads to equilibrate to room temperature prior to use. 
2.  Vortex the Capture Beads for 15 seconds before immediate use to ensure a homogeneous mixture. 
# Chapter 6. Wash and Recover Captured Singleplex or Multiplex DNA Sample 
This chapter describes the process of the washing and recovery of the captured Singleplex or Multiplex DNA Sample after hybridization to the KAPA HyperCap Target Enrichment Probes. Refer to HyperDesign to determine the capture target size for the following procedure. This chapter requires the use of components from the following kits: KAPA HyperCap Workflow v3. 2 27
# Chapter 6. Wash and Recover Captured Singleplex or Multiplex DNA Sample 
3. Aliquot 50 μL of beads per capture reaction into a 0.2 mL or 1.5 mL tube ( i.e. for one capture use 50 μL beads and for 
two captures use 100 μL beads, etc.). Beads for up to two captures can be prepared in a single 0.2 mL tube or up to twelve captures can be prepared in a single 1.5 mL tube. 
4. Place the tube(s) on a magnet to c ollect the beads. Incubate until the liquid is clear. 
5. Remove and discard the supernatant being careful not to disturb the beads. 
6. Keeping the tube(s) on the magnet, add 2X t he initial beads' volume of 1X Bead Wash Buffer ( e.g. for one capture use 100 μL of buffer and for two captures use 200 μL buffer, etc. ). 
7. Remove the tube(s) from the magnet and mix thoroughly by vortexing. Perform a quick spin. 
8. Place the tube(s) on the magnet to collect the beads. Incubate until the liquid is clear. 
9. Remove and discard the supernatant being careful not to disturb the beads. 
10. Keeping the tube(s) on the magnet, perform a second wash by adding 2X the initial beads' volume of 1X Bead Wash Buffer ( e.g. for one capture use 100 μL buffer and for two captures use 200 μL buffer, etc. ). 
11. Remove the tube(s) from the magnet and mix thoroughly by vortexing. Perform a quick spin. 
12. Place the tube(s) on the magnet to collect the beads. Incubate until the liquid is clear .
13. Remove and discard the supernatant being careful not to disturb the beads. 
14. Add 1X the initial beads' volume of 1X Bead Wash Buffer ( i.e. 50 μL buffer per capture). 
15. Remove the tube(s) from the magnet and mix thoroughly by vortexing for 10 seconds. Perform a quick spin. 
16. If preparing Capture Beads for more than one capture in a single tube, a liquot 50 μL of resuspended beads into a new tube/well for each capture. 
17. Place the tube(s) on a magnet to c ollect the beads. Incubate until the liquid is clear. 
18. Carefully remove and discard the supernatant. 
19. The Capture Beads are now ready to bind the hybridized DNA. Proceed immediately to the next step. 
Do not allow the Capture Beads to dry out. Small amounts of residual 1X Bead Wash Buffer will not interfere with binding of DNA to the Capture Beads. 
For ≥40 Mbp Capture Target Size 
1. Allow the Capture Beads to equilibrate to room temperature prior to use. 
2. Vortex the Capture Beads for 15 seconds before immediate use to ensure a homogeneous mixture. 
3. Aliquot 100 μL of beads per capture reaction into a 0.2 mL or 1.5 mL tube ( i.e. for one capture use 100 μL beads and for two captures use 200 μL beads, etc. ). Beads for up to two captures can be prepared in a single 0.2 mL tube or up to twelve captures can be prepared in a single 1.5 mL tube. 
4. Place the tube(s) on a magnet to c ollect the beads. Incubate until the liquid is clear. 
5. Remove and discard the supernatant being careful not to disturb the beads. 
6. Keeping the tube(s) on the magnet, add 1X the initial beads' volume of 1X Bead Wash Buffer ( e.g. for one capture use 100 μL buffer and for two captures use 200 μL buffer, etc. ). 
7. Remove the tube(s) from the magnet and mix thoroughly by vortexing. Perform a quick spin. 
8. Place the tube(s) on the magnet to c ollect the beads. Incubate until the liquid is clear. 
9. Remove and discard the supernatant being careful not to disturb the beads. 
10. Keeping the tube(s) on the magnet, perform a second wash by adding 1X the initial beads' volume of 1X Bead Wash Buffer ( e.g. for one capture use 100 μL buffer and for two captures use 200 μL buffer, etc. ). 
11. Remove the tube(s) from the magnet and mix thoroughly by vortexing. Perform a quick spin. 
12. Place the tube(s) on the magnet to c ollect the beads. Incubate until the liquid is clear 
13. Remove and discard the supernatant being careful not to disturb the beads. 
14. Add 1X the initial beads' volume of 1X Bead Wash Buffer ( i.e. 100 μL buffer per capture). 
15. Remove the tube(s) from the magnet and mix thoroughly by vortexing for 10 seconds. KAPA HyperCap Workflow v3. 2 28
# Chapter 6. Wash and Recover Captured Singleplex or Multiplex DNA Sample 
16. If preparing Capture Beads for more than one capture in a single tube, a liquot 100 μL of resuspended beads into a new tube/well for each capture. 
17. Place the tube(s) on the magnet to c ollect the beads. Incubate until the liquid is clear. 
18. Remove and discard the supernatant. 
19. The Capture Beads are now ready to bind the hybridized DNA. Proceed immediately to the next step. 
Do not allow the Capture Beads to dry out. Small amounts of residual 1X Bead Wash Buffer will not interfere with binding of DNA to the Capture Beads. 
# Step 3. Bind Hybridized DNA to the Capture Beads 
1. Transfer each hybridization sample into a single tube/well with prepared Capture Beads from the previous step. 
2. Mix thoroughly by vortexing for 10 seconds and perform a quick spin. Avoid pellet formation. 3. Incubate the capture reaction by placing the tube in a thermocycler set to +55°C for 15 minutes, with the 
thermocycler lid temperature set to +105°C. 
This step can be performed in the same thermocycler used in the probe hybridization incubation step. 
4. Following the 15 minutes incubation, proceed immediately to the next step. 
# Step 4. Wash the Capture Beads Plus Bead-Bound DNA 
The t hermocycler should remain at +55°C with the heated lid set to +105°C for the following steps. 
1. Add 100 μL of pre-warmed 1X Wash Buffer I to the 60.4 μL of Capture Beads-bound DNA. 2. Mix thoroughly by vortexing for 10 seconds, ensure that the mixture is homogeneous. Perform a quick spin. 
3. Place the tube(s) on a magnet to c ollect the beads. Incubate until the liquid is clear. 
4. Remove and discard the supernatant without disturbing the beads. 
5. Add 200 μL of pre-warmed 1X Stringent Wash Buffer to each tube .
6. Remove the tube(s) from the magnet. 
7. Mix thoroughly by vortexing for 10 seconds, ensure that the mixture is homogeneous. Perform a quick spin. 
8. Place the tube(s) in the thermocycler pre-heated to +55°C, close the lid (set to +105°C) and incubate for 5 minutes. 
9. After the 5 minutes incubation, remove the tube(s) from the thermocycler and place on the magnet to collect the beads. Incubate until the liquid is clear. 
10. Remove and discard the supernatant being careful not to disturb the beads. 
11. Add 200 μL of pre-warmed 1X Stringent Wash Buffer to each tube .
12. Remove the tube(s) from the magnet. 
13. Mix thoroughly by vortexing for 10 seconds, ensure that the mixture is homogeneous. Perform a quick spin .
14. Place in the thermocycler pre-heated to +55°C, close the lid (set to +105°C) and incubate for 5 minutes. 
15. After the 5 minutes incubation, remove the tube(s) from the thermocycler and place on the magnet to collect the beads. Incubate until the liquid is clear. 
16. Remove and discard the supernatant being careful not to disturb the beads .17. Add 200 μL of room temperature 1X Wash Buffer I. 
18. Mix thoroughly by vortexing for 10 seconds, ensure that the mixture is homogeneous. Perform a quick spin .KAPA HyperCap Workflow v3. 2 29
# Chapter 6. Wash and Recover Captured Singleplex or Multiplex DNA Sample 
19. Incubate at room temperature for 1 minute. 
20. Place the tube(s) on a magnet to c ollect the beads. Incubate until the liquid is clear. 
21. Remove and discard the supernatant being careful not to disturb the beads. 
22. Add 200 μL of room temperature 1X Wash Buffer II. 
23. Mix thoroughly by vortexing for 10 seconds, ensure that the mixture is homogeneous. Perform a quick spin and transfer the contents to a new tube. 
24. Incubate at room temperature for 1 minute. 
25. Place the tube(s) on the magnet to c ollect the beads. Incubate until the liquid is clear. 
26. Remove and discard the supernatant being careful not to disturb the beads. 
27. Add 200 μL of room temperature 1X Wash Buffer III. 
28. Mix thoroughly by vortexing for 10 seconds, ensure that the mixture is homogeneous. Perform a quick spin. 
29. Incubate at room temperature for 1 minute. 
30. Place the tube(s) on the magnet to c ollect the beads. Incubate until the liquid is clear. 
31. Remove and discard the supernatant being careful not to disturb the beads. 
32. Remove the tube(s) from the magnet. 
33. Add 20 μL PCR Grade water to each tube/plate well and mix thoroughly . Perform a quick spin. 
34. Proceed to Chapter 7 . Amplify Enriched Singleplex or Multiplex DNA Sample. 
No elution is performed at this step. The enriched DNA sample library remains bound to the Capture Beads and will be used as the template in the PCR as described in Chapter 7 .
Transferring the samples to a new tube is essential. KAPA HyperCap Workflow v3. 2 30 
# Chapter 7. Amplify Enriched Singleplex or Multiplex DNA Sample 
# Chapter 7. Amplify Enriched Singleplex or Multiplex DNA Sample 
This chapter describes the amplification of the enriched Singleplex or Multiplex DNA sample, bound to the Capture Beads. This chapter requires the use of components from the following kits: 
■ KAPA HyperCapture Reagent Kit 
■ KAPA HyperCapture Bead Kit 
In addition, ensure that the following are available: 
■ Freshly-prepared 80% ethanol 
■ 10 mM Tris-HCl, pH 8.0, optional 
# References 
■ Thermocycler Manual 
■ Agilent Bioanalyzer DNA Analysis Kit Guide 
# Step 1. Resuspend the Post-Capture PCR Oligos 
1. Briefly spin the lyophilized Post-Capture PCR Oligos, contained in the KAPA HyperCapture Reagent Kit, to allow the contents to pellet at the bottom of the tube. Note that both oligos are contained within a single tube. 
2. Add 480 μL PCR Grade water to the tube of centrifuged oligos. 
3. Briefly v ortex the resuspended oligos. 
4. Spin down the tube to collect the contents. 
5. Store resuspended oligo s at -15 °C to -25°C. 
# Step 2. Prepare the Post-Capture PCR Master Mix 
Instructions for preparing individual PCR reactions are shown here. When assembling a master 
mix for processing multiple samples, prepare an excess volume of ~5% to allow for complete 
pipetting (automated liquid handling systems may require an excess of ~20%). 
Make sure KAPA HyperPure Beads are removed from storage to allow time for proper 
equilibration to room temperature. For best performance, store the beads protected from light 
when not in use. 
1. Prepare a master mix of the following reagents. 
Post-Capture PCR Master Mix * Per Individual PCR Reaction 
KAPA HiFi HotStart ReadyMix (2X)  25 μL 
Post-Capture PCR Oligos  5 μL 
Total  30 μL 
2. Add 30 μL of Post-Capture PCR Master Mix to a 0.2 mL tube or well of a PCR plate. 
3. Retrieve the bead-bound DNA sample from Chapter 6 step 33 and mix thoroughly by vortexing for 10 seconds. Perform a quick spin. Avoid pellet formation. 4. Transfer 20 μL of the bead-bound DNA as template into the tube/well with the 30 μL Post-Capture PCR Master Mix. (If performing a negative control, add 20 μL PCR Grade water to this tube/well). 
5. Mix thoroughly by pipetting up and down several times. 
■ PCR Grade water 
■ Qubit Fluorometer Manual and Qubit dsDNA HS Assay Kit Guide 
■ Agilent 2100 Bioanalyzer Instrument Manual  
> * The Post-Capture PCR Oligos and the KAPA HiFi HotStart ReadyMix (2X) are components of the KAPA HyperCapture Reagent Kit. KAPA HyperCap Workflow v3. 231
# Chapter 7. Amplify Enriched Singleplex or Multiplex DNA Sample 
# Step 3. Perform the Post-Capture PCR Amplification 
1. Place the tube(s) in the thermocycler and run the following Post-Capture PCR program with the lid temperature set to +105°C: 
• Step 1: 45 seconds at +98°C 
• Step 2: 15 seconds at +98°C 
• Step 3: 30 seconds at +60°C 
• Step 4: 30 seconds at +72°C 
• Step 5: Go to Step 2, variable (see table below for recommendation s)
• Step 6: 1 minute at +72°C 
• Step 7: Hold at +4°C 
Capture Target Size  Total Number of Post-Capture PCR Cycles 
< 100 kb  18 
100 kb – 2 Mb  16 
> 2 Mb – 40 Mb  10 
> 40 Mb  8
The Post-Capture PCR cycling conditions are recommendations and can be adjusted to individual experimental needs. 
2. Proceed immediately to the next step. 
# Step 4. Purify the Amplified Enriched Singleplex or Multiplex DNA Sample using KAPA HyperPure Beads 
Over -drying of the beads can result in yield loss. 
Do not discard the supernatant. The supernatant contains the Amplified Enriched Library. 
1. Retrieve KAPA HyperPure Beads. Ensure the beads are equilibrated t o room temperature and a homogenous mixture. 
2. Mix the amplified enriched DNA sample from Step 3 by vortexing and place on the magnet to collect the beads. Incubate until the liquid is clear. 
3. Carefully transfer the supernatant to a new tube. 
4. Add 70 μL of KAPA HyperPure Beads to the 50 μL amplified enriched Singleplex or Multiplex DNA Sample library. 
5. Mix thoroughly by vortexing for 10 seconds, ensure that the mixture is homogeneous and perform a quick spin. 
6. Incubate at room temperature for 5 minutes to allow the Amplified Enriched DNA S ample Library to bind to the beads. 
7. Place the tube(s) containing the bead-bound DNA on a magnet to collect the beads. Incubate until the liquid is clear. 
8. Remove and discard the supernatant being careful not to disturb the beads. 
9. Keeping the tube(s) on the magnet, add 200 μL of freshly-prepared 80% ethanol. 
10. Incubate at room temperature for ≥30 seconds. 
11. Remove and discard the ethanol. 
12. Keeping the tube(s) on the magnet, add 200 μL of freshly-prepared 80% ethanol. 
13. Incubate the tube(s) at room temperature for ≥30 seconds. 
14. Carefully remove and discard the ethanol. Try to remove all residual ethanol without disturbing the beads. Allow the beads to dry at room temperature with the tube lid open. KAPA HyperCap Workflow v3. 2 32
# Chapter 7. Amplify Enriched Singleplex or Multiplex DNA Sample 
# Step 5. Qualify the Amplified Enriched Singleplex or Multiplex DNA Sample 
# Library 
1. Measure the concentration of the Amplified Enriched DNA Sample using a Qubit dsDNA HS Assay Kit: 
a. Make a 10-fold dilution by combining 2 μL of the sample with 18 μL of PCR Grade water. b. Utilize 5 μL of the diluted sample using the Qubit dsDNA HS Assay Kit to obtain the concentration of the diluted sample. Multiply by 10 to obtain results for the undiluted sample. Reserve at least 1 μL of the diluted sample to be analyzed using the Agilent Bioanalyzer DNA High Sensitivity Kit. 
• The Amplified Enriched DNA Sample Library yield should be ≥ 100 ng. 
• If the negative control yields show significant amplification, this would indicate contamination. 
2. Analyze 1 μL of each diluted sample (and any controls) using an Agilent Bioanalyzer DNA High Sensitivity assay according to manufacturer’s instructions. 
• The average fragment length should be between 150 to 500 bp with an average peak of ~320 bp. 
> Figure 5: Example of a successfully amplified enriched Multiplex DNA Sample using the KAPA HyperPlus Kit and analyzed using an Agilent Bioanalyzer High Sensitivity DNA chip.
15. Remove the tube(s) from the magnet. 
16. Resuspend the bead pellet using 22 μL of PCR Grade water. 
17. Vortex for at least 10 seconds to ensure that all of the beads are resuspended. Perform a quick spin. 
18. Incubate at room temperature for 2 minutes to allow the sample to elute off the beads. 
19. Briefly spin and p lace the tube(s) back on the magnet and allow the liquid to clear. 
20. Transfer 20 μL of the eluate to a new tube/well. 
This tube contains the Amplified Enriched and purified DNA Sample Library. KAPA HyperCap Workflow v3. 2 33
# Chapter 7. Amplify Enriched Singleplex or Multiplex DNA Sample 
Figure 6: Example of a successfully amplified enriched Multiplex DNA Sample Library using the KAPA HyperPrep Kit and analyzed using an Agilent Bioanalyzer High Sensitivity DNA chip. 
3. The amplified enriched Singleplex or Multiplex DNA Sample is ready for sequencing. Refer to the Illumina guide on instructions for sequencing your Singleplex or Multiplex DNA Sample. KAPA HyperCap Workflow v3. 2 34
# Appendix A. Troubleshooting 
# Appendix A. Troubleshooting 
This appendix provides guidance for interpreting unexpected results and recommendations for implementing corrective action if problems occur. For technical questions, contact your local Roche Technical Support. Go to 
sequencing.roche.com/support.html for contact information. 
The Illumina sequencing workflow is not supported by Roche Technical Support. 
Observation  Cause(s) / Recommendation(s) 
Sample Library Preparation 
Less than 100 ng of input DNA is available for library preparation.  Libraries generated using <100 ng of input gDNA can produce high 
quality capture results; however, several adjustments summarized 
below, will increase the probability of success. 
■ Adjust the adapter concentration to preserve the adapter: insert molar ratio in order to maintain high ligation efficiency. For more information, contact Roche Technical Support. 
■ Increase the number of PCR cycles during Pre-Capture PCR by 1– 3 cycles, depending on starting gDNA amount. Performance of these cycle number recommendations may vary for your 
particular sample. 
Note:  There is a possibility that these steps will not lead to success 
with lower input amounts. For the most current guidance on working 
with lower input amounts, contact Roche Technical Support. 
DNA extracted from formalin-fixed paraffin-embedded (FFPE) tissue 
is used for library preparation. 
DNA extracted from FFPE tissue is highly variable in quality due to 
chemical damage and fragmentation, and often is available only in 
small amounts. 
■ To increase probability for success, follow recommendations for library construction using less than 100 ng of input DNA and perform enzymatic DNA fragmentation according to the KAPA HyperPlus workflow. This can help to remove chemically-damaged termini that will interfere with adapter ligation. 
■ KAPA HyperPlus library preparation is recommended since it 
improves sample complexity through increased adapter ligation efficiency. 
■ If fragmentation optimization is required, precious samples should not be used. Instead, fragmentation parameters should be optimized using non-precious DNA samples that are representative of the actual sample to be processed. 
Note: There is a possibility that these steps will not lead to success with DNA extracted from FFPE samples. For the most current guidance on working with FFPE sample s review the KAPA HyperCap FFPET DNA Workflow user's guide and/or contact Roche Technical Support .
Amplified Sample Library (Pre-Capture PCR Product) 
Yield is <1 μg  Possible error occurred during library preparation or compromised 
reagents were used. 
Use a previously processed DNA sample as a positive control for 
library construction and or an evaluated sample library as a positive 
control for PCR reagents. 
Fragment distribution (analyzed using an Agilent HS DNA chip) shows that the average amplified library fragment size is not within the size range of 150 to 500 bp. 
Poor fragmentation occurred. Repeat library preparation. 
Fragment distribution (analyzed using an Agilent HS DNA chip) is bimodal, with a larger set of fragments observed in addition to, or instead of, the expected set of fragments. 
See the section entitled “Amplified Enriched Multiplex DNA Sample 
(Post-Capture PCR Product)” in this appendix. KAPA HyperCap Workflow v3. 2 35
# Appendix A. Troubleshooting 
Observation  Cause(s) / Recommendation(s) 
The negative control yield measured by the Qubit is >1 ng/μL.  The measurement may be high due to the presence of adapter 
dimers carried over from previous steps/PCR. This carryover will be 
apparent as one or more sharp peaks visible less than 150 bp in size 
when examining the data from the Agilent Bioanalyzer HS DNA chip. 
This carryover is not a sign of contamination. 
The Agilent Bioanalyzer HS DNA chip indicates one or more visible 
sharp peaks that are <150 bp in size. 
These peaks, which represent primers, primer-dimers or adapter-
dimers will not interfere with the capture process but could lead to 
overestimation of the amplified library yield when interpreting the 
data from Qubit. Repeat the PCR cleanup. 
The Agilent Bioanalyzer HS DNA chip indicates that the average 
amplified material is 150 to 500 bp in size in the negative control for 
sample library amplification. 
This material could represent cross contamination between amplified 
sample libraries. Test reagents for contamination and replace if 
necessary. Repeat library construction using fresh genomic DNA. 
Only the Agilent Bioanalyzer DNA 1000 chip is available for qualifying sample following Pre-Capture PCR amplification and purification. 
The Agilent Bioanalyzer DNA 1000 chip can be used to analyze the 
Pre-Capture Sample Library. Please refer to the manufacturer’s user 
manual for further guidance. 
Prepare the Multiplexing Sample Library Pool and KAPA HyperCap Target Enrichment Probes 
The Multiplex DNA Sample Library volume is greater than 45 μL.  For KAPA HyperPure bead based library concentration, transfer the Multiplex DNA Sample Library to a 1.5 mL tube and add 20 μL of COT DNA. Add 2X KAPA HyperPure Beads to the mixture and proceed with step 3, point 3, on page 2 4, section "Step: Prepare the Sample for Hybridization." For vacuum concentration (if the required bead volume is very large) of the Multiplex DNA Sample Library, use the following recommendations : 1) Mix   
> the Multiplex DNA Sample Library with 20 μL of COT DNA. 2) Concentrate the sample with a vacuum concentrator to a volume of 65 μL. 3) Once concentrated proceed with step 3, point 2, on page 2 4, section "Step 3.
> Prepare the Sample for Hybridization."
Amplified enriched Multiplex DNA Sample (Post-Capture PCR Product) 
Yield is <100 ng (yield should be ≥100 ng).  Library construction or Pre-Capture PCR failed. Pre-Capture 
PCR yield should be ≥ 1 μg. Repeat with a DNA sample that was previously processed with success. 
Incorrect hybridization or wash temperatures were used. Make sure the correct hybridization and wash temperatures were used. If temperatures were not correct, repeat the experiment starting from Chapter 5. 
PCR reagents are compromised. Verify that the positive control worked. If the positive control did not work, repeat hybridization 
starting from Chapter 5 and re-amplify using fresh PCR reagents. 
Note: Experiments designed to capture less genomic DNA ( i.e. a
smaller cumulative target size) may be successful even though they can generate lower PCR yields than experiments designed to capture larger targets. Target size should be taken into consideration when evaluating low Post-Capture PCR yield. 
Fragment distribution (analyzed using an Agilent HS DNA chip) shows that the average amplified fragment size is not within the size range of 150 to 500 bp. 
Poor fragmentation occurred. Repeat library preparation. 
Fragment distribution (analyzed using an Agilent HS DNA chip) is 
bimodal, with a larger set of fragments observed in addition to (Fig 
B), the expected set of fragments (Fig A): 
A. 
B. 
Primer depletion due to over-amplification of sample library relative to the amount of primers available in the reaction results in single stranded amplification products. These products can anneal to each other via adapter homology on both ends of the fragments to form heteroduplexes, and migrate as larger products on an Agilent HS DNA chip than their actual length in base pairs. The artifact can be resolved by increasing primer concentration or reducing cycle number in the PCR reaction, however the products themselves are perfectly acceptable for use in sequence capture and sequencing, and this artifact will not affect capture performance. Consider using the KAPA Library Quantification Kit for proper quantification of libraries containing heteroduplexes (which Qubit may fail to measure). 
The Agilent HS DNA chip traces shown in Fig. A and Fig. B, show the result of amplification of the same enriched gDNA sample library following Post-Capture PCR amplification for 14 or 20-cycles, respectively. The same artifact can appear in Pre-Capture PCR amplification. KAPA HyperCap Workflow v3. 2 36
# Appendix A. Troubleshooting 
Observation  Cause(s) / Recommendation(s) 
Οnly the Agilent Bioanalyzer DNA 1000 chip is available for qualifying sample following Post-Capture PCR amplification and purification. 
The Agilent Bioanalyzer DNA 1000 chip can be used to analyze the 
Post -Capture Sample Library. Please refer to the manufacturer’s user manual for further guidance. 
Sequencing Performance Metrics 
High Duplicate rates  Reduction in Pre-Capture and/or Post-Capture PCR cycles may 
reduce duplicate rates. Take the following points into consideration when altering cycle numbers. 
■ Enough material is present to accurately quantify after PCR clean-up. 
■ For the Pre-Capture PCR, enough amplified library is produced for at least 1 μg or 1.5 μg respectively for singleplex or multi plex 
hybridization. 
Increasing input into hybridization may improve duplicate rates. Take 
the following points into consideration when adjusting sample input 
into hybridization. 
■ Enough material is produced from the Pre-Capture PCR 
reaction(s) to increase sample input into hybridization. 
Note:  There is a possibility that these steps will not lead to success 
in reducing duplicate rates. For the most current guidance, contact 
Roche Technical Support. KAPA HyperCap Workflow v3. 2 37
# Appendix B. Limited Warranty 
# Appendix B. Limited Warranty 
1. Limited Warranty 
A. Products: Roche Sequencing Solutions, Inc. (“Roche”) warrants that its Products conform to its published specifications and 
are free from defects in material or workmanship. Customer’s sole and exclusive remedy (and Roche’s sole and exclusive liability) 
under this limited warranty shall be to either (a) replace the defective Products, or (b) provide Customer with a refund, as solely 
determined by Roche. 
B. Under no circumstances shall Roche’s liability to Customer exceed the amount paid by Customer for the Services and Products 
to Roche. Roche will bear all reasonable shipping costs if service is re-performed at Roche or the Products are replaced. This 
warranty does not apply to any defect or nonconformance caused by (i) the failure by Customer to provide a suitable storage, 
use, or operating environment for the Materials or Customer’s submission of substandard quality Materials or contaminated or 
degraded Materials to Roche, (ii) Customer’s use of non-recommended reagents, (iii) Customer’s use of the Products, Materials 
or Data for a purpose or in a manner other than that for which they were designed, (iv) the failure by Customer to follow Roche’s 
published protocols; or (v) as a result of any other abuse, misuse or neglect of the Products, Materials or Data by Customer. This 
warranty applies only to Customer and not to third parties. 
C. TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, ROCHE DISCLAIMS ALL OTHER REPRESENTATIONS, AND 
WARRANTIES, EXPRESS OR IMPLIED, WITH RESPECT TO THE PRODUCTS, SERVICES AND DATA, INCLUDING BUT NOT LIMITED 
TO, ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-INFRINGEMENT. 
CUSTOMER’S SOLE REMEDY FOR BREACH OF WARRANTY IS STATED ABOVE. 
D. Any action by Customer against Roche for Roche’s breach of this warranty must be commenced within 12 months following the 
date of such breach. Notwithstanding such 12-month period, within twenty (20) days of the delivery of Data and/or Products to 
Customer, Customer must notify Roche in writing of any nonconformity of the Services and Products, describing the nonconformity 
in detail; otherwise all Services and Products shall be conclusively deemed accepted without qualification. 
2. FURTHER LIABILITY LIMITATION 
TO THE FULLEST EXTENT PERMITTED UNDER APPLICABLE LAW, ROCHE SHALL NOT HAVE ANY LIABILITY FOR INCIDENTAL, 
COMPENSATORY, PUNITIVE, CONSEQUENTIAL, INDIRECT, SPECIAL OR OTHER SIMILAR DAMAGES, HOWEVER CAUSED AND 
REGARDLESS OF FORM OF ACTION WHETHER IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT PRODUCT LIABILITY 
OR OTHERWISE, EVEN IF ROCHE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. CUSTOMER UNDERSTANDS 
THAT ANY RISKS OF LOSS HEREUNDER ARE REFLECTED IN THE PRICE OF THE SERVICES AND PRODUCTS AND THAT THESE 
TERMS WOULD HAVE BEEN DIFFERENT IF THERE HAD BEEN A DIFFERENT ALLOCATION OF RISK. 
If you have any questions concerning service of this product , contact your local Roche Technical Support. Go to 
sequencing.roche.com/support.html  for contact information. 
Evidence of original purchase is required.  It is important to save your sales receipt or packaging slip to verify purchase. KAPA HyperCap Workflow v3. 2 38
# Appendix C. Products Overview 
# Appendix C. Products Overview 
Product Name and Pack Size  Catalog #  Product Name and Pack Size  Catalog # 
KAPA HyperChoice Probes  KAPA HyperChoice MAX 3Mb T1, 384 rxn  09052631001 
KAPA HyperChoice MAX 0.5Mb T1, 12 rxn  09052143001  KAPA HyperChoice MAX 3Mb T1, 768 rxn  09052640001 
KAPA HyperChoice MAX 0.5Mb T1, 24 rxn  09052151001  KAPA HyperChoice MAX 3Mb T1, 1152 rxn  09052658001 
KAPA HyperChoice MAX 0.5Mb T1, 48 rxn  09052160001  KAPA HyperChoice MAX 3Mb T1, 1536 rxn  09052666001 
KAPA HyperChoice MAX 0.5Mb T1, 96 rxn  09052178001  KAPA HyperChoice MAX 3Mb T1, 4000 rxn  09052674001 
KAPA HyperChoice MAX 0.5Mb T1, 192 rxn  09052186001  KAPA HyperChoice MAX 3Mb T1, 10000 rxn  09052682001 
KAPA HyperChoice MAX 0.5Mb T1, 384 rxn  09052194001  KAPA HyperChoice MAX 3Mb T1, 20000 rxn  09052704001 
KAPA HyperChoice MAX 0.5Mb T1, 768 rxn  09052208001  KAPA HyperChoice MAX 3Mb T1, 50000 rxn  09052712001 
KAPA HyperChoice MAX 0.5Mb T1, 1152 rxn  09052216001  KAPA HyperChoice MAX 3Mb T1, 100000 rxn  09052739001 
KAPA HyperChoice MAX 0.5Mb T1, 1536 rxn  09052224001  KAPA HyperChoice MAX 3Mb T2, 12 rxn  09052747001 
KAPA HyperChoice MAX 0.5Mb T1, 4000 rxn  09052232001  KAPA HyperChoice MAX 3Mb T2, 24 rxn  09052755001 
KAPA HyperChoice MAX 0.5Mb T2, 12 rxn  09052259001  KAPA HyperChoice MAX 3Mb T2, 48 rxn  09052763001 
KAPA HyperChoice MAX 0.5Mb T2, 24 rxn  09052267001  KAPA HyperChoice MAX 3Mb T2, 96 rxn  09052771001 
KAPA HyperChoice MAX 0.5Mb T2, 48 rxn  09052275001  KAPA HyperChoice MAX 3Mb T2, 192 rxn  09052780001 
KAPA HyperChoice MAX 0.5Mb T2, 96 rxn  09052283001  KAPA HyperChoice MAX 3Mb T2, 384 rxn  09052798001 
KAPA HyperChoice MAX 0.5Mb T2, 192 rxn  09052291001  KAPA HyperChoice MAX 3Mb T2, 768 rxn  09052801001 
KAPA HyperChoice MAX 0.5Mb T2, 384 rxn  09052305001  KAPA HyperChoice MAX 3Mb T2, 1152 rxn  09052810001 
KAPA HyperChoice MAX 0.5Mb T2, 768 rxn  09052313001  KAPA HyperChoice MAX 3Mb T2, 1536 rxn  09052828001 
KAPA HyperChoice MAX 0.5Mb T2, 1152 rxn  09052321001  KAPA HyperChoice MAX 3Mb T2, 4000 rxn  09052836001 
KAPA HyperChoice MAX 0.5Mb T2, 1536 rxn  09052330001  KAPA HyperChoice MAX 3Mb T2, 10000 rxn  09052844001 
KAPA HyperChoice MAX 0.5Mb T2, 4000 rxn  09052348001  KAPA HyperChoice MAX 3Mb T2, 20000 rxn  09052852001 
KAPA HyperChoice MAX 0.5Mb T3, 12 rxn  09052356001  KAPA HyperChoice MAX 3Mb T2, 50000 rxn  09052879001 
KAPA HyperChoice MAX 0.5Mb T3, 24 rxn  09052364001  KAPA HyperChoice MAX 3Mb T2, 100000 rxn  09052887001 
KAPA HyperChoice MAX 0.5Mb T3, 48 rxn  09052372001  KAPA HyperChoice MAX 3Mb T3, 12 rxn  09052895001 
KAPA HyperChoice MAX 0.5Mb T3, 96 rxn  09052399001  KAPA HyperChoice MAX 3Mb T3, 24 rxn  09052909001 
KAPA HyperChoice MAX 0.5Mb T3, 192 rxn  09052402001  KAPA HyperChoice MAX 3Mb T3, 48 rxn  09052917001 
KAPA HyperChoice MAX 0.5Mb T3, 384 rxn  09052429001  KAPA HyperChoice MAX 3Mb T3, 96 rxn  09052925001 
KAPA HyperChoice MAX 0.5Mb T3, 768 rxn  09052437001  KAPA HyperChoice MAX 3Mb T3, 192 rxn  09052933001 
KAPA HyperChoice MAX 0.5Mb T3, 1152 rxn  09052445001  KAPA HyperChoice MAX 3Mb T3, 384 rxn  09052941001 
KAPA HyperChoice MAX 0.5Mb T3, 1536 rxn  09052453001  KAPA HyperChoice MAX 3Mb T3, 768 rxn  09052950001 
KAPA HyperChoice MAX 0.5Mb T3, 4000 rxn  09052461001  KAPA HyperChoice MAX 3Mb T3, 1152 rxn  09052968001 
KAPA HyperChoice MAX 0.5Mb T4, 12 rxn  09052470001  KAPA HyperChoice MAX 3Mb T3, 1536 rxn  09052976001 
KAPA HyperChoice MAX 0.5Mb T4, 24 rxn  09052488001  KAPA HyperChoice MAX 3Mb T3, 4000 rxn  09052984001 
KAPA HyperChoice MAX 0.5Mb T4, 48 rxn  09052496001  KAPA HyperChoice MAX 3Mb T3, 10000 rxn  09052992001 
KAPA HyperChoice MAX 0.5Mb T4, 96 rxn  09052500001  KAPA HyperChoice MAX 3Mb T3, 20000 rxn  09053000001 
KAPA HyperChoice MAX 0.5Mb T4, 192 rxn  09052518001  KAPA HyperChoice MAX 3Mb T3, 50000 rxn  09053018001 
KAPA HyperChoice MAX 0.5Mb T4, 384 rxn  09052526001  KAPA HyperChoice MAX 3Mb T3, 100000 rxn  09053026001 
KAPA HyperChoice MAX 0.5Mb T4, 768 rxn  09052534001  KAPA HyperChoice MAX 5Mb, 12 rxn  09053034001 
KAPA HyperChoice MAX 0.5Mb T4, 1152 rxn  09052542001  KAPA HyperChoice MAX 5Mb, 24 rxn  09053042001 
KAPA HyperChoice MAX 0.5Mb T4, 1536 rxn  09052569001  KAPA HyperChoice MAX 5Mb, 48 rxn  09053069001 
KAPA HyperChoice MAX 0.5Mb T4, 4000 rxn  09052577001  KAPA HyperChoice MAX 5Mb, 96 rxn  09053077001 
KAPA HyperChoice MAX 3Mb T1, 12 rxn  09052585001  KAPA HyperChoice MAX 5Mb, 192 rxn  09053085001 
KAPA HyperChoice MAX 3Mb T1, 24 rxn  09052593001  KAPA HyperChoice MAX 5Mb, 384 rxn  09053093001 
KAPA HyperChoice MAX 3Mb T1, 48 rxn  09052607001  KAPA HyperChoice MAX 5Mb, 768 rxn  09053107001 
KAPA HyperChoice MAX 3Mb T1, 96 rxn  09052615001  KAPA HyperChoice MAX 5Mb, 1152 rxn  09053115001 
KAPA HyperChoice MAX 3Mb T1, 192 rxn  09052623001  KAPA HyperChoice MAX 5Mb, 1536 rxn  09053123001 KAPA HyperCap Workflow v3. 2 39
# Appendix C. Products Overview 
Product Name and Pack Size  Catalog #  Product Name and Pack Size  Catalog # 
KAPA HyperChoice MAX 5Mb, 4000 rxn  09053131001  KAPA HyperChoice MAX 200Mb, 48 rxn  09062416001 
KAPA HyperChoice MAX 5Mb, 10000 rxn  09053140001  KAPA HyperChoice MAX 200Mb, 96 rxn  09062424001 
KAPA HyperChoice MAX 5Mb, 20000 rxn  09053158001  KAPA HyperChoice MAX 200Mb, 192 rxn  09062432001 
KAPA HyperChoice MAX 5Mb, 50000 rxn  09053166001  KAPA HyperChoice MAX 200Mb, 384 rxn  09062459001 
KAPA HyperChoice MAX 5Mb, 100000 rxn  09053174001  KAPA HyperChoice MAX 200Mb, 768 rxn  09062467001 
KAPA HyperChoice MAX 20Mb, 12 rxn  09053182001  KAPA HyperChoice MAX 200Mb, 1152 rxn  09062475001 
KAPA HyperChoice MAX 20Mb, 24 rxn  09053204001  KAPA HyperChoice MAX 200Mb, 1536 rxn  09062483001 
KAPA HyperChoice MAX 20Mb, 48 rxn  09053212001  KAPA HyperChoice MAX 200Mb, 4000 rxn  09062491001 
KAPA HyperChoice MAX 20Mb, 96 rxn  09053239001  KAPA HyperChoice MAX 200Mb, 10000 rxn  09062505001 
KAPA HyperChoice MAX 20Mb, 192 rxn  09053247001  KAPA HyperChoice MAX 200Mb, 20000 rxn  09062513001 
KAPA HyperChoice MAX 20Mb, 384 rxn  09053255001  KAPA HyperChoice MAX 200Mb, 50000 rxn  09062521001 
KAPA HyperChoice MAX 20Mb, 768 rxn  09053263001  KAPA HyperChoice MAX 200Mb, 100000 rxn  09062530001 
KAPA HyperChoice MAX 20Mb, 1152 rxn  09053271001  KAPA HyperExome Probes 
KAPA HyperChoice MAX 20Mb, 1536 rxn  09053280001  KAPA HyperExome, 12 rxn  09062548001 
KAPA HyperChoice MAX 20Mb, 4000 rxn  09053301001  KAPA HyperExome, 24 rxn  09062556001 
KAPA HyperChoice MAX 20Mb, 10000 rxn  09053310001  KAPA HyperExome, 48 rxn  09062564001 
KAPA HyperChoice MAX 20Mb, 20000 rxn  09053328001  KAPA HyperExome, 96 rxn  09062572001 
KAPA HyperChoice MAX 20Mb, 50000 rxn  09053336001  KAPA HyperExome, 192 rxn  09062599001 
KAPA HyperChoice MAX 20Mb, 100000 rxn  09053344001  KAPA HyperExome, 384 rxn  09062602001 
KAPA HyperChoice MAX 40Mb, 24 rxn  09053352001  KAPA HyperExome, 768 rxn  09062629001 
KAPA HyperChoice MAX 40Mb, 48 rxn  09053379001  KAPA HyperExome, 1152 rxn  09062637001 
KAPA HyperChoice MAX 40Mb, 96 rxn  09053387001  KAPA HyperExome, 1536 rxn  09062645001 
KAPA HyperChoice MAX 40Mb, 192 rxn  09053395001  KAPA HyperExome, 4000 rxn  09062653001 
KAPA HyperChoice MAX 40Mb, 384 rxn  09053409001  KAPA HyperExome, 10000 rxn  09062661001 
KAPA HyperChoice MAX 40Mb, 768 rxn  09053417001  KAPA HyperExome, 20000 rxn  09062670001 
KAPA HyperChoice MAX 40Mb, 1152 rxn  09053425001  KAPA HyperExome, 50000 rxn  09062688001 
KAPA HyperChoice MAX 40Mb, 1536 rxn  09053433001  KAPA HyperExome, 100000 rxn  09062696001 
KAPA HyperChoice MAX 40Mb, 4000 rxn  09053441001 
KAPA HyperChoice MAX 40Mb, 10000 rxn  09053450001  KAPA HyperExplore Probes 
KAPA HyperChoice MAX 40Mb, 20000 rxn  09053468001  KAPA HyperExplore MAX 0.5Mb T1, 12 rxn  09062700001 
KAPA HyperChoice MAX 40Mb, 50000 rxn  09053476001  KAPA HyperExplore MAX 0.5Mb T1, 24 rxn  09062718001 
KAPA HyperChoice MAX 40Mb, 100000 rxn  09053484001  KAPA HyperExplore MAX 0.5Mb T1, 48 rxn  09062726001 
KAPA HyperChoice MAX 60Mb, 24 rxn  09053492001  KAPA HyperExplore MAX 0.5Mb T1, 96 rxn  09062734001 
KAPA HyperChoice MAX 60Mb, 48 rxn  09053506001  KAPA HyperExplore MAX 0.5Mb T1, 192 rxn  09062742001 
KAPA HyperChoice MAX 60Mb, 96 rxn  09053514001  KAPA HyperExplore MAX 0.5Mb T1, 384 rxn  09062769001 
KAPA HyperChoice MAX 60Mb, 192 rxn  09053522001  KAPA HyperExplore MAX 0.5Mb T1, 768 rxn  09062777001 
KAPA HyperChoice MAX 60Mb, 384 rxn  09053549001  KAPA HyperExplore MAX 0.5Mb T1, 1152 rxn  09062785001 
KAPA HyperChoice MAX 60Mb, 768 rxn  09053557001  KAPA HyperExplore MAX 0.5Mb T1, 1536 rxn  09062793001 
KAPA HyperChoice MAX 60Mb, 1152 rxn  09062335001  KAPA HyperExplore MAX 0.5Mb T1, 4000 rxn  09062807001 
KAPA HyperChoice MAX 60Mb, 1536 rxn  09062343001  KAPA HyperExplore MAX 0.5Mb T2, 12 rxn  09062815001 
KAPA HyperChoice MAX 60Mb, 4000 rxn  09062351001  KAPA HyperExplore MAX 0.5Mb T2, 24 rxn  09062823001 
KAPA HyperChoice MAX 60Mb, 10000 rxn  09062360001  KAPA HyperExplore MAX 0.5Mb T2, 48 rxn  09062831001 
KAPA HyperChoice MAX 60Mb, 20000 rxn  09062378001  KAPA HyperExplore MAX 0.5Mb T2, 96 rxn  09062840001 
KAPA HyperChoice MAX 60Mb, 50000 rxn  09062386001  KAPA HyperExplore MAX 0.5Mb T2, 192 rxn  09062858001 
KAPA HyperChoice MAX 60Mb, 100000 rxn  09062394001  KAPA HyperExplore MAX 0.5Mb T2, 384 rxn  09062866001 
KAPA HyperChoice MAX 200Mb, 24 rxn  09062408001  KAPA HyperExplore MAX 0.5Mb T2, 768 rxn  09062874001 KAPA HyperCap Workflow v3. 2 40 
# Appendix C. Products Overview 
Product Name and Pack Size  Catalog #  Product Name and Pack Size  Catalog # 
KAPA HyperExplore MAX 0.5Mb T2, 1152 rxn  09062882001  KAPA HyperExplore MAX 3Mb T2, 4000 rxn  09063404001 
KAPA HyperExplore MAX 0.5Mb T2, 1536 rxn  09062904001  KAPA HyperExplore MAX 3Mb T2, 10000 rxn  09063412001 
KAPA HyperExplore MAX 0.5Mb T2, 4000 rxn  09062912001  KAPA HyperExplore MAX 3Mb T2, 20000 rxn  09063439001 
KAPA HyperExplore MAX 0.5Mb T3, 12 rxn  09062939001  KAPA HyperExplore MAX 3Mb T2, 50000 rxn  09063447001 
KAPA HyperExplore MAX 0.5Mb T3, 24 rxn  09062947001  KAPA HyperExplore MAX 3Mb T2, 100000 rxn  09063455001 
KAPA HyperExplore MAX 0.5Mb T3, 48 rxn  09062955001  KAPA HyperExplore MAX 3Mb T3, 12 rxn  09063463001 
KAPA HyperExplore MAX 0.5Mb T3, 96 rxn  09062963001  KAPA HyperExplore MAX 3Mb T3, 24 rxn  09063471001 
KAPA HyperExplore MAX 0.5Mb T3, 192 rxn  09062971001  KAPA HyperExplore MAX 3Mb T3, 48 rxn  09063480001 
KAPA HyperExplore MAX 0.5Mb T3, 384 rxn  09062980001  KAPA HyperExplore MAX 3Mb T3, 96 rxn  09063498001 
KAPA HyperExplore MAX 0.5Mb T3, 768 rxn  09062998001  KAPA HyperExplore MAX 3Mb T3, 192 rxn  09063501001 
KAPA HyperExplore MAX 0.5Mb T3, 1152 rxn  09063005001  KAPA HyperExplore MAX 3Mb T3, 384 rxn  09063510001 
KAPA HyperExplore MAX 0.5Mb T3, 1536 rxn  09063013001  KAPA HyperExplore MAX 3Mb T3, 768 rxn  09063528001 
KAPA HyperExplore MAX 0.5Mb T3, 4000 rxn  09063021001  KAPA HyperExplore MAX 3Mb T3, 1152 rxn  09063536001 
KAPA HyperExplore MAX 0.5Mb T4, 12 rxn  09063030001  KAPA HyperExplore MAX 3Mb T3, 1536 rxn  09063544001 
KAPA HyperExplore MAX 0.5Mb T4, 24 rxn  09063048001  KAPA HyperExplore MAX 3Mb T3, 4000 rxn  09063552001 
KAPA HyperExplore MAX 0.5Mb T4, 48 rxn  09063056001  KAPA HyperExplore MAX 3Mb T3, 10000 rxn  09063579001 
KAPA HyperExplore MAX 0.5Mb T4, 96 rxn  09063064001  KAPA HyperExplore MAX 3Mb T3, 20000 rxn  09063587001 
KAPA HyperExplore MAX 0.5Mb T4, 192 rxn  09063072001  KAPA HyperExplore MAX 3Mb T3, 50000 rxn  09063595001 
KAPA HyperExplore MAX 0.5Mb T4, 384 rxn  09063099001  KAPA HyperExplore MAX 3Mb T3, 100000 rxn  09063609001 
KAPA HyperExplore MAX 0.5Mb T4, 768 rxn  09063102001  KAPA HyperExplore MAX 5Mb, 12 rxn  09063617001 
KAPA HyperExplore MAX 0.5Mb T4, 1152 rxn  09063129001  KAPA HyperExplore MAX 5Mb, 24 rxn  09063625001 
KAPA HyperExplore MAX 0.5Mb T4, 1536 rxn  09063137001  KAPA HyperExplore MAX 5Mb, 48 rxn  09063633001 
KAPA HyperExplore MAX 0.5Mb T4, 4000 rxn  09063145001  KAPA HyperExplore MAX 5Mb, 96 rxn  09063641001 
KAPA HyperExplore MAX 3Mb T1, 12 rxn  09063153001  KAPA HyperExplore MAX 5Mb, 192 rxn  09063650001 
KAPA HyperExplore MAX 3Mb T1, 24 rxn  09063161001  KAPA HyperExplore MAX 5Mb, 384 rxn  09063668001 
KAPA HyperExplore MAX 3Mb T1, 48 rxn  09063170001  KAPA HyperExplore MAX 5Mb, 768 rxn  09063676001 
KAPA HyperExplore MAX 3Mb T1, 96 rxn  09063188001  KAPA HyperExplore MAX 5Mb, 1152 rxn  09063684001 
KAPA HyperExplore MAX 3Mb T1, 192 rxn  09063196001  KAPA HyperExplore MAX 5Mb, 1536 rxn  09063692001 
KAPA HyperExplore MAX 3Mb T1, 384 rxn  09063200001  KAPA HyperExplore MAX 5Mb, 4000 rxn  09063706001 
KAPA HyperExplore MAX 3Mb T1, 768 rxn  09063218001  KAPA HyperExplore MAX 5Mb, 10000 rxn  09063714001 
KAPA HyperExplore MAX 3Mb T1, 1152 rxn  09063226001  KAPA HyperExplore MAX 5Mb, 20000 rxn  09063722001 
KAPA HyperExplore MAX 3Mb T1, 1536 rxn  09063234001  KAPA HyperExplore MAX 5Mb, 50000 rxn  09063749001 
KAPA HyperExplore MAX 3Mb T1, 4000 rxn  09063242001  KAPA HyperExplore MAX 5Mb, 100000 rxn  09063757001 
KAPA HyperExplore MAX 3Mb T1, 10000 rxn  09063269001  KAPA HyperExplore MAX 20Mb, 12 rxn  09063765001 
KAPA HyperExplore MAX 3Mb T1, 20000 rxn  09063277001  KAPA HyperExplore MAX 20Mb, 24 rxn  09063773001 
KAPA HyperExplore MAX 3Mb T1, 50000 rxn  09063285001  KAPA HyperExplore MAX 20Mb, 48 rxn  09068414001 
KAPA HyperExplore MAX 3Mb T1, 100000 rxn  09063293001  KAPA HyperExplore MAX 20Mb, 96 rxn  09068422001 
KAPA HyperExplore MAX 3Mb T2, 12 rxn  09063307001  KAPA HyperExplore MAX 20Mb, 192 rxn  09068449001 
KAPA HyperExplore MAX 3Mb T2, 24 rxn  09063315001  KAPA HyperExplore MAX 20Mb, 384 rxn  09068457001 
KAPA HyperExplore MAX 3Mb T2, 48 rxn  09063323001  KAPA HyperExplore MAX 20Mb, 768 rxn  09068465001 
KAPA HyperExplore MAX 3Mb T2, 96 rxn  09063331001  KAPA HyperExplore MAX 20Mb, 1152 rxn  09068473001 
KAPA HyperExplore MAX 3Mb T2, 192 rxn  09063340001  KAPA HyperExplore MAX 20Mb, 1536 rxn  09068481001 
KAPA HyperExplore MAX 3Mb T2, 384 rxn  09063358001  KAPA HyperExplore MAX 20Mb, 4000 rxn  09068490001 
KAPA HyperExplore MAX 3Mb T2, 768 rxn  09063366001  KAPA HyperExplore MAX 20Mb, 10000 rxn  09068503001 
KAPA HyperExplore MAX 3Mb T2, 1152 rxn  09063374001  KAPA HyperExplore MAX 20Mb, 20000 rxn  09068511001 
KAPA HyperExplore MAX 3Mb T2, 1536 rxn  09063382001  KAPA HyperExplore MAX 20Mb, 50000 rxn  09068520001 KAPA HyperCap Workflow v3. 2 41
# Appendix C. Products Overview 
Product Name and Pack Size  Catalog #  Product Name and Pack Size  Catalog # 
KAPA HyperExplore MAX 20Mb, 100000 rxn  09068538001  KAPA Target Enrichment, reagents and kits 
KAPA HyperExplore MAX 40Mb, 24 rxn  09068546001  KAPA Universal Adapter, 15uM 960 uL  09063781001 
KAPA HyperExplore MAX 40Mb, 48 rxn  09068554001  KAPA Universal Adapter, 15uM 4x960 uL  09063790001 
KAPA HyperExplore MAX 40Mb, 96 rxn  09068562001 
KAPA UDI Primer Mixes, 1-96, 96 rxn  09134336001 
KAPA HyperExplore MAX 40Mb, 192 rxn  09068589001 
KAPA HyperExplore MAX 40Mb, 384 rxn  09068597001 
KAPA HyperExplore MAX 40Mb, 768 rxn  09068619001 
KAPA HyperExplore MAX 40Mb, 1152 rxn  09068627001 
KAPA HyperCapture Reagent kit, 24 rxn  09075810001 
KAPA HyperExplore MAX 40Mb, 1536 rxn  09068635001 
KAPA HyperCapture Reagent kit, 96 rxn  09075828001 
KAPA HyperExplore MAX 40Mb, 4000 rxn  09068643001 
KAPA HyperCapture Reagent kit, 384 rx VK  09075917001 
KAPA HyperExplore MAX 40Mb, 10000 rxn  09068651001 
KAPA HyperCapture Bead kit, 24 rxn  09075780001 
KAPA HyperExplore MAX 40Mb, 20000 rxn  09068660001 
KAPA HyperCapture Bead kit, 96 rxn  09075798001 
KAPA HyperExplore MAX 40Mb, 50000 rxn  09068678001 
KAPA HyperCapture Bead kit, 384 rxn VK  09075909001 
KAPA HyperExplore MAX 40Mb, 100000 rxn  09068686001 
KAPA Universal Enhancing Oligos, 24 rxn  09075836001 
KAPA HyperExplore MAX 60Mb, 24 rxn  09068694001 
KAPA Universal Enhancing Oligos, 96 rxn  09075852001 
KAPA HyperExplore MAX 60Mb, 48 rxn  09068708001 
KAPA Universal Enhancing Oligos 384rx VK  09075895001 
KAPA HyperExplore MAX 60Mb, 96 rxn  09068716001 
KAPA Hybrid Enhancer Reagent, 1 mL  09075763001 
KAPA HyperExplore MAX 60Mb, 192 rxn  09068724001 
KAPA Probes resuspension buffer, 1 mL  09075879001 
KAPA HyperExplore MAX 60Mb, 384 rxn  09068732001 
KAPA Probes resuspension buffer, 5 mL  09075887001 
KAPA HyperExplore MAX 60Mb, 768 rxn  09068759001 
KAPA HyperExplore MAX 60Mb, 1152 rxn  09068767001 
KAPA HyperExplore MAX 60Mb, 1536 rxn  09068775001 
KAPA HyperExplore MAX 60Mb, 4000 rxn  09068783001 
KAPA HyperExplore MAX 60Mb, 10000 rxn  09068791001 
KAPA HyperExplore MAX 60Mb, 20000 rxn  09068805001 
KAPA HyperExplore MAX 60Mb, 50000 rxn  09068813001 
KAPA HyperExplore MAX 60Mb, 100000 rxn  09068821001 
KAPA HyperExplore MAX 200Mb, 24 rxn  09068830001 
KAPA HyperExplore MAX 200Mb, 48 rxn  09068848001 
KAPA HyperExplore MAX 200Mb, 96 rxn  09068856001 
KAPA HyperExplore MAX 200Mb, 192 rxn  09068864001 
KAPA HyperExplore MAX 200Mb, 384 rxn  09068872001 
KAPA HyperExplore MAX 200Mb, 768 rxn  09068899001 
KAPA HyperExplore MAX 200Mb, 1152 rxn  09068902001 
KAPA HyperExplore MAX 200Mb, 1536 rxn  09068929001 
KAPA HyperExplore MAX 200Mb, 4000 rxn  09068937001 
KAPA HyperExplore MAX 200Mb, 10000 rxn  09068945001 
KAPA HyperExplore MAX 200Mb, 20000 rxn  09068953001 
KAPA HyperExplore MAX 200Mb, 50000 rxn  09068961001 
KAPA HyperExplore MAX 200Mb, 100000 rxn  09068970001 
KAPA HyperExome kits 09107592001 09107606001 KAPA HyperExome Prep Kit, 192 samples KAPA HyperExome Plus Kit, 192 samples KAPA UDI Primer Mixes, 97-192, 96 rxn KAPA UDI Primer Mixes, 193-288, 96 rxn KAPA UDI Primer Mixes, 289-384, 96 rxn 09053603001 09053611001 09053620001 KAPA HyperCap Oncology panel KAPA HyperCap Oncology panel, 12 rxn KAPA HyperCap Oncology panel, 24 rxn KAPA HyperCap Oncology panel, 48 rxn KAPA HyperCap Heredity panel KAPA HyperCap Heredity panel, 12 rxn KAPA HyperCap Heredity panel, 24 rxn KAPA HyperCap Heredity panel, 48 rxn KAPA HyperCap Heredity panel, 96 rxn KAPA HyperCap Heredity panel, 192 rxn 09462384001 09462457001 09462465001 09462473001 09462481001 09462490001 09462503001 09462511001 KAPA Universal UMI Adapter, 960 uL KAPA Universal UMI Adapter, 4x960 uL VK 09329862001 09329889001  
> VK: Virtual kits, consist of 4 x 96 reaction kits.
KAPA, HYPERCAP , HYPEREXOME, HYPERCHOICE, HYPEREXPLORE and 
HYPERCAPTURE are trademarks of Roche. 
All other product names and trademarks are the property of their respective owners. 
sequencing.roche.com 
© 2015-2021 Roche Sequencing Solutions, Inc. All rights reserved. Roche Sequencing Solutions, Inc. 
4300 Hacienda Drive 
Pleasanton, CA 94588 USA 
For Research Use Only. 
Not for use in diagnostic procedures. 
# R