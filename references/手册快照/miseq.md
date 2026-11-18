# Preparing DNA Libraries for Sequencing on the MiSeq
URL: https://content.ilabsolutions.com/wp-content/uploads/2013/04/MiSeq-Preparing-DNA-libraries.pdf
# Preparing DNA Libraries for Sequencing on the MiSeq ®
FOR RESEARCH USE ONLY 
Introduction 3Prepare a Fresh Dilution of NaOH 5Denature and Dilute DNA 6Prepare PhiX Control 9Combine Sample Library and PhiX Control 10 Load Sample Libraries onto Cartridge 11 Technical Assistance 
ILLUMINA PROPRIETARY Part # 15039740 Rev. A January 2013 This document and its contents are proprietary to Illumina, Inc. and its affiliates ("Illumina"), and are intended solely for the contractual use of its customer in connection with the use of the product(s) described herein and for no other purpose. This document and its contents shall not be used or distributed for any other purpose and/or otherwise communicated, disclosed, or reproduced in any way whatsoever without the prior written consent of Illumina. Illumina does not convey any license under its patent, trademark, copyright, or common-law rights nor similar rights of any third parties by this document. The instructions in this document must be strictly and explicitly followed by qualified and properly trained personnel in order to ensure the proper and safe use of the product(s) described herein. All of the contents of this document must be fully read and understood prior to using such product(s). FAILURE TO COMPLETELY READ AND EXPLICITLY FOLLOW ALL OF THE INSTRUCTIONS CONTAINED HEREIN MAY RESULT IN DAMAGE TO THE PRODUCT(S), INJURY TO PERSONS, INCLUDING TO USERS OR OTHERS, AND DAMAGE TO OTHER PROPERTY. ILLUMINA DOES NOT ASSUME ANY LIABILITY ARISING OUT OF THE IMPROPER USE OF THE PRODUCT(S) DESCRIBED HEREIN (INCLUDING PARTS THEREOF OR SOFTWARE) OR ANY USE OF SUCH PRODUCT(S) OUTSIDE THE SCOPE OF THE EXPRESS WRITTEN LICENSES OR PERMISSIONS GRANTED BY ILLUMINA IN CONNECTION WITH CUSTOMER'S ACQUISITION OF SUCH PRODUCT (S). © 2013 Illumina, Inc. All rights reserved. 
Illumina , IlluminaDx , BaseSpace , BeadArray , BeadXpress , cBot , CSPro , DASL , DesignStudio , Eco , GAIIx ,
Genetic Energy , Genome Analyzer , GenomeStudio , GoldenGate , HiScan , HiSeq , Infinium , iSelect ,
MiSeq , Nextera , NuPCR , SeqMonitor , Solexa , TruSeq , TruSight , VeraCode , the pumpkin orange color, and the Genetic Energy streaming bases design are trademarks or registered trademarks of Illumina, Inc. All other brands and names contained herein are the property of their respective owners. Introduction  
> Preparing DNA Libraries for Sequencing on the MiSeq
# 3
# Introduction 
This guide explains steps to denature and dilute libraries after sample preparation to prepare them for sequencing on the MiSeq. This guide also explains how to prepare an Illumina PhiX control and combine libraries with the PhiX control prior to loading them onto the MiSeq reagent cartridge. 
NOTE 
This Process Does Not Apply to All Library Types —If you are sequencing TruSeq Amplicon libraries (either Custom Amplicon or Cancer Panel) or Nextera XT libraries, do not perform this step. TruSeq Amplicon and Nextera XT protocols result in a ready-to-use normalized concentration of pooled libraries. 
## Required Consumables 
The following consumables are required to prepare DNA libraries for sequencing on the MiSeq. 
Consumable Supplier 
HT1 (Hybridization Buffer), thawed and pre-chilled Illumina-supplied Provided in the MiSeq reagent kit Illumina PhiX Control Illumina-supplied (Optional) Stock 1.0 N NaOH User-supplied Tris-Cl 10 mM, pH 8.5 with 0.1% Tween 20 User-supplied 
## Best Practices 
} Always prepare freshly diluted NaOH for denaturing libraries for cluster generation. This step is essential to the denaturation process. 
} To prevent small pipetting errors from affecting the final NaOH concentration, prepare freshly diluted NaOH in a volume of 1 ml of 0.2 N NaOH. 
## About Low Diversity Libraries 
Low diversity libraries are libraries where a significant number of the reads have the same sequence. This shifts the base composition because the reads are no longer random. Low diversity can occur with some expression studies with > 25% one type of transcript, low plexity amplicon pools, adapter dimer, or bisulfite sequencing, for 4 Part # 15039740 Rev. A 
example. A higher concentration spike-in helps balance the overall lack of sequence diversity. To optimize performance on the MiSeq and to obtain higher quality data, Illumina recommends sequencing samples with high diversity and avoiding monotemplate stretches during sequencing. Low diversity can occur with the following libraries, for example: 
} Libraries derived from RNA with more than 25% of the reads from a single transcript 
} Pools of one or a few amplicons 
} Libraries with initial cycle indexing When sequencing PCR amplicons, bisulfite converted samples, 16S rRNA libraries, or other samples where diversity is low, one approach is to concatamerize the amplicons and fragment to create sequencing diversity. Other options include indexing your libraries and sequencing them with other diverse libraries, or pooling together different amplicons, ensuring that the index read has diversity. For recommendations on index read diversity, see low plexity pooling guidelines in the Nextera DNA Sample Preparation Guide or the TruSeq Custom Amplicon Library Preparation Guide .
> NOTE
> For proper focus, the MiSeq needs to detect signal in the C or T channel in the first cycle. Prepare a Fresh Dilution of NaOH
Preparing DNA Libraries for Sequencing on the MiSeq 5
# Prepare a Fresh Dilution of NaOH 
CAUTION 
Using freshly diluted NaOH is essential in order to completely denature samples for cluster generation on the MiSeq. 
1 Prepare 1 ml of 0.2 N NaOH by combining the following volumes in a microcentrifuge tube: • Laboratory-grade water (800 μl) • Stock 1.0 N NaOH (200 μl) 2 Invert the tube several times to mix. 
NOTE 
A fresh dilution of 0.2 N NaOH is required for the denaturation process in preparing sample DNA and preparing a PhiX control. After preparing the sample DNA, you can set aside remaining 0.2 NaOH if you plan to prepare a PhiX control within the next 12 hours .Otherwise, discard the remaining dilution of 0.2 N NaOH. 6 Part # 15039740 Rev. A 
# Denature and Dilute DNA 
It is important that the concentration of NaOH is equal to 0.2 N in the denaturation solution and not more than 0.001 (1 mM) in the final solution after diluting with HT1. 
NOTE 
Higher concentrations of NaOH in the library will inhibit library hybridization to the flow cell and decrease cluster density. 
To ensure that NaOH concentration does not exceed 1 mM in the final solution, use one of the following denaturation and dilution protocols most appropriate for your library: 
} 4 nM library denaturation and dilution 
• Requires a 4 nM library. • Supports high library concentrations (> 10 pM). • Results in a 1 ml of a 20 pM DNA solution in 1 mM NaOH. 
} 2 nM library denaturation and dilution 
• Uses a 2 nM library. • Results in a 1 ml of a 10 pM DNA solution in 1 mM NaOH. 
NOTE 
If a loading concentration > 10 pM is required, increase the 2 nM library to 4 nM using a speed vac, for example, and then follow the denaturation and dilution protocol for a 4 nM library. 
## Denature DNA for 4 nM Library 
1 Combine the following volumes of sample DNA and freshly diluted 0.2 N NaOH in a microcentrifuge tube: • 4 nM sample DNA (5 μl) • 0.2 N NaOH (5 μl) 2 Discard the remaining dilution of 0.2 N NaOH or set aside to prepare a PhiX control within the next 12 hours. 3 Vortex briefly to mix the sample solution, and then centrifuge the sample solution to 280 xg for 1 minute. 4 Incubate for 5 minutes at room temperature to denature the DNA into single strands. 5 Add the following volume of pre-chilled HT1 to the tube containing denatured DNA: • Denatured DNA (10 μl) • Pre-chilled HT1 (990 μl) Denature and Dilute DNA  
> Preparing DNA Libraries for Sequencing on the MiSeq
# 7
This results in a 20 pM denatured library in 1 mM NaOH. 6 Place the denatured DNA on ice until you are ready to proceed to final dilution. 
## Dilute Denatured DNA for 4 nM Library 
1 Dilute the denatured DNA to the desired concentration using the following example: 
Final Concentration 6 pM 8 pM 10 pM 12 pM 15 pM 
20 pM denatured DNA 180 μl 240 μl 300 μl 360 μl 450 μl Pre-chilled HT1 420 μl 360 μl 300 μl 240 μl 150 μl 
2 Invert several times to mix and then pulse centrifuge the DNA solution. 3 Place the denatured and diluted DNA on ice until you are ready to load your samples onto the MiSeq reagent cartridge. 
## Denature DNA for 2 nM Library 
1 Combine the following volumes of sample DNA and freshly diluted 0.2 N NaOH in a microcentrifuge tube: • 2 nM sample DNA (5 μl) • 0.2 N NaOH (5 μl) 2 Discard the remaining dilution of 0.2 N NaOH or set aside to prepare a PhiX control within the next 12 hours. 3 Vortex briefly to mix the sample solution, and then centrifuge the sample solution to 280 xg for 1 minute. 4 Incubate for 5 minutes at room temperature to denature the DNA into single strands. 5 Add the following volume of pre-chilled HT1 to the tube containing denatured DNA: • Denatured DNA (10 μl) • Pre-chilled HT1 (990 μl) This results in a 10 pM denatured library in 2 mM NaOH. 6 Place the denatured DNA on ice until you are ready to proceed to final dilution. 8 Part # 15039740 Rev. A 
## Dilute Denatured DNA for 2 nM Library 
Use the following instructions to further dilute the 10 pM DNA to give 600 μl of the desired input concentration. 1 Dilute the denatured DNA to the desired concentration using the following example: 
Final Concentration 6 pM 8 pM 10 pM 
10 pM denatured DNA 360 μl 480 μl 600 μl Pre-chilled HT1 240 μl 120 μl 0 μl 
2 Invert several times to mix and then pulse centrifuge the DNA solution. 3 Place the denatured and diluted DNA on ice until you are ready to load your samples onto the MiSeq reagent cartridge. Prepare PhiX Control  
> Preparing DNA Libraries for Sequencing on the MiSeq
# 9
# Prepare PhiX Control 
Use the following instructions to denature and dilute the 10 nM PhiX library to 12.5 pM. This should result in a cluster density of 1000–1200 K/mm². 1 Combine the following volumes to dilute the PhiX library to 4 nM: • 10 nM PhiX library (2 μl) • 10 mM Tris-Cl, pH 8.5 with 0.1% Tween 20 (3 μl) 2 If not prepared within the last 12 hours , prepare a fresh dilution of 0.2 N NaOH. 
## Denature PhiX Control 
1 Combine the following volumes of 4 nM PhiX library and freshly diluted 0.2 N NaOH in a microcentrifuge tube: • 4 nM PhiX library (5 μl) • 0.2 N NaOH (5 μl) 2 Vortex briefly to mix the 2 nM PhiX library solution. 3 Centrifuge the template solution to 280 xg for 1 minute. 4 Incubate for 5 minutes at room temperature to denature the PhiX library into single strands. 5 Add the following volume of pre-chilled HT1 to the tube containing denatured PhiX library to result in a 20 pM PhiX library. • Denatured PhiX library (10 μl) • Pre-chilled HT1 (990 μl) 
NOTE 
You can store the denatured 20 pM PhiX library up to 3 weeks at -15° to -25°C. After 3 weeks, cluster numbers tend to decrease. 
## Dilute Denatured PhiX Control 
1 Dilute the denatured 20 pM PhiX library to 12.5 pM as follows: • 20 pM denatured PhiX library (375 μl) • Pre-chilled HT1 (225 μl) 2 Invert several times to mix the solution. 3 Discard the remaining dilution of 0.2 N NaOH. 10 Part # 15039740 Rev. A 
# Combine Sample Library and PhiX Control 
Illumina recommends a low-concentration PhiX control spike-in at 1% for most libraries. For metagenomics or low diversity libraries, increase the PhiX control spike-in to at least 25%. 1 Combine the following volumes of denatured PhiX control library and your denatured sample library. 
Most Libraries (1%) Metagenomics or Low Diversity Libraries (≥ 25%) 
Denatured and diluted PhiX control 10 μl 250 μl Denatured and diluted sample library 990 μl 750 μl 
2 Set the combined sample library and PhiX control aside on ice until you are ready to load it onto the MiSeq reagent cartridge. Load Sample Libraries onto Cartridge 
Preparing DNA Libraries for Sequencing on the MiSeq 11 
# Load Sample Libraries onto Cartridge 
Make sure that the MiSeq reagent cartridge is fully thawed and prepared as described in the MiSeq System User Guide , Part # 15027617. When the reagent cartridge is ready for use, load the prepared libraries onto the cartridge. 1 Using a separate, clean, and empty 1 ml pipette tip, pierce the foil seal over the reservoir labeled Load Samples .
NOTE 
Do not pierce any other reagent positions. Other reagent positions are pierced automatically during the sequencing run. 
2 Pipette 600 μl of prepared libraries into the Load Samples reservoir. Avoid touching the foil seal as you dispense the sample. 
Figure 1 Load Libraries 
3 Proceed directly to the run setup steps using the MiSeq Control Software (MCS) interface. Notes Technical Assistance 
> Preparing DNA Libraries for Sequencing on the MiSeq
# Technical Assistance 
For technical assistance, contact Illumina Technical Support. 
Illumina Website www.illumina.com 
Email techsupport@illumina.com Table 1 Illumina General Contact Information 
Region Contact Number Region Contact Number 
North America 1.800.809.4566 Italy 800.874909 Austria 0800.296575 Netherlands 0800.0223859 Belgium 0800.81102 Norway 800.16836 Denmark 80882346 Spain 900.812168 Finland 0800.918363 Sweden 020790181 France 0800.911850 Switzerland 0800.563118 Germany 0800.180.8994 United Kingdom 0800.917.0041 Ireland 1.800.812949 Other countries +44.1799.534000 Table 2 Illumina Customer Support Telephone Numbers 
MSDSs 
Material safety data sheets (MSDSs) are available on the Illumina website at www.illumina.com/msds. 
Product Documentation 
Additional product documentation in PDF is available for download from the Illumina website. Go to www.illumina.com/support and select a product. A MyIllumina login is required. To register for a MyIllumina account, please visit my.illumina.com/Account/Register. Illumina San Diego, California 92122 U.S.A. +1.800.809.ILMN (4566) +1.858.202.4566 (outside North America) techsupport@illumina.com www.illumina.com