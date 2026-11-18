# Procedure & checklist – Preparing whole genome and metagenome libraries using SMRTbell prep kit 3.0
URL: https://www.pacb.com/wp-content/uploads/Procedure-checklist-Preparing-whole-genome-and-metagenome-libraries-using-SMRTbell-prep-kit-3.0.pdf
Page 1 
© 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026 
# Overview 
This procedure describes the workflow for constructing whole genome sequencing (WGS) libraries from genomic and metagenomic DNA using the SMRTbell ® prep kit 3.0 for sequencing on PacBio ® HiFi systems. This procedure may be performed manually or using one of the many qualified automation methods for SMRTbell prep kit 3.0. PacBio Nanobind ® DNA extractions kits are recommended for optimal HiFi sequencing performance using this protocol. 
Library prep with SMRTbell prep kit 3.0 
Number of libraries supported per kit 24 Workflow time for manual preparation of 8 samples or fewer** 
• Short read eliminator (optional, size-selection) 2.5 hours (tube format) 
• Library prep with SMRTbell prep kit 3.0 3.5 hours 
**Times may vary by users and available lab equipment; times do not include sample QC 
***Recovery will vary depending on sample quality. Excluding SRE can improve total sample recovery. 
Mechanical DNA shearing and size recommendations 
DNA shearing Automated pipette-tip shearing (preferred DNA shearing method) Mean target fragment lengths 15–20 kb Size selection Short read eliminator on gDNA, and 3.1X (35% v/v) AMPure ® PB on HiFi library Average library recovery 15% of genomic DNA input*** 
Genomic DNA input Sequel II ® and Sequel IIe SPRQ™/SPRQ-Nx chemistry 
Minimum DNA mass* 1 μg per SMRT Cell 500 ng per acquisition *Multiplexing samples can lower per sample genomic DNA input requirements if excluding SRE treatment. The total mass of all multiplexed samples must be equivalent to the numbers indicated above ( e.g. 500 ng for SPRQ chemistries). 
# Preparing whole genome and metagenome libraries using SMRTbell ® prep kit 3.0 
# Procedure & checklist Page 2 
© 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026 
# Standard workflow overview 
1 Short Read Eliminator (SRE) 
2 DNA shearing 
4 Repair & A-tailing 
5 Adapter ligation & cleanup 
Safe stop 
6 Nuclease treatment 
7 AMPure PB cleanup and size selection 
3 Post-shearing cleanup 
8 Annealing, binding, and cleanup (ABC) 
Safe stop 
Safe stop 
Safe stop 
Safe stop Page 3 
© 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026 
# Materials and equipment 
DNA quality QC recommendation 
Femto Pulse system (best for HMW DNA sizing) Agilent Technologies, Inc. M5330AA Femto Pulse gDNA 165kb analysis kit Agilent Technologies, Inc. FP-1002-0275 
DNA quantitation recommendation 
Qubit fluorometer ThermoFisher Scientific Q33238 Qubit 1X dsDNA HS assay kit ThermoFisher Scientific Q33230 
Mechanical DNA shearing equipment recommendations 
Hamilton Microlab Prep PacBio ® 103-283-600 Hamilton assay ready workstation Contact Hamilton 300 μL CO-RE II Tips (Filtered, Conductive) Hamilton, 235903 or PacBio qualified automated system See PacBio Compatible for list of partners 
SMRTbell ® library preparation 
SRE Kit (recommended) PacBio ® 102-208-300 SMRTbell ® prep kit 3.0, includes: 
• SMRTbell ® prep kit 3.0 
• SMRTbell ® cleanup beads 
• Low TE buffer PacBio ® 102-182-700 SMRTbell ® adapter index plate 96A (Optional but recommended for Revio SMRT Cell – Nx multi-use) PacBio ® 102-009-200 AMPure ® PB bead size selection kit PacBio ® 102-182-500 Revio SPRQ™ polymerase kit or 
Vega™ polymerase kit or 
Vega™ SPRQ polymerase kit or 
Sequel ® II binding kit 3.2* PacBio ® 103-520-100 PacBio ® 103-517-600 PacBio ® 103-729-600 PacBio ® 102-333-300 
* Procedure for Sequel II binding kit 3.2 can be found in SMRT ® Link Sample Setup 
Other supplies 
200 Proof ethanol, molecular biology or ACS grade Any major lab supplier (MLS) Nuclease-free water, molecular biology grade Any MLS 8-channel pipettes Any MLS 0.2 mL 8-tube strips USA Scientific TempAssure 1402-4708 Microcentrifuge Any MLS Page 4   
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
Magnetic separation rack compatible with 0.2 mL 8-tube strips V&P Scientific VP 772F4-1 Thermocycler compatible with 0.2 mL 8-tube strips Any MLS 1.5 mL DNA LoBind tubes Eppendorf 022431021 
# Before you begin 
The following are general best practices for whole genome sequencing (WGS) using the Revio, Vega or Sequel II/IIe systems. Please read carefully prior to beginning library prep. 
# Genomic DNA (gDNA) QC and input mass recommendations 
PacBio Nanobind ® DNA extractions kits are recommended to ensure sufficient mass and optimal HiFi sequencing performance with this protocol on aplicable sample types. Other DNA extractions kits and protocols are compatible with this protocol but may provide lower quality DNA. 
## gDNA quality QC 
The Agilent Femto Pulse system is recommended when accurate sizing of genomic DNA (gDNA) is necessary. Please see the PacBio product note for more details. Recommended guidelines for evaluating gDNA quality using the Agilent Femto Pulse for this protocol: 
• Use the Femto Pulse gDNA 165 kb analysis kit (Agilent FP-1002-0275) 
• Dilute samples to 250 pg/μL 
• For optimal performance: 70% or more of the DNA should be ≥10 kb for this protocol. This corresponds to a genome quality number (GQN) of 7.0 or higher at 10 kb. 
• If the GQN at 10 kb is less than 7.0, higher gDNA inputs may be required due to sample loss in SRE. 
• If the majority of DNA is less than 10 kb, SRE is not recommended. 
• Shearing may be bypassed if the sample is already in the appropriate size-range. 
Important note: 
In long-read sequencing, yield is directly proportional to the quality of the genomic DNA input and the fragment lengths generated after shearing. To maximize yield and genome coverage per run, we recommend starting with high quality genomic DNA containing minimal material below 10 kb, and with >50% mass over 30 kb for WGS. Nonetheless, lower quality DNA can be sequenced but the user will need to align sequencing yield expectations with the DNA input quality. Please see the Revio spec sheet or Vega spec sheet for more information on yield expectations by DNA fragment size. 
## gDNA input mass 
It is recommended to use a quantification assay specific for double stranded DNA (dsDNA) such as the Qubit 1X dsDNA high sensitivity assay kit. Please follow the manufacturer’s instructions for the assays being used. 
## Low mass vs High mass gDNA input for SRE and DNA shearing 
With SPRQ™/SPRQ-Nx chemistry, the minimum single-sample gDNA input for library preparation is 500 ng. 
• For gDNA input between 0.5–1.25 μg, use the Low Mass settings. Page 5   
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
• For gDNA input between 2–5 μg , use the High Mass setting. 
• For gDNA input between 1.25 and 2 μg use the High Mass setting but note that the higher input (2 – 5 μg) will provide optimal recovery and fragment sizes. 
• For Sequel II or IIe, 2 μg gDNA input is still recommended for loading of 1 SMRT Cell. 
• Do not exceed 1 μg or 3 μg of gDNA into the DNA shearing Low or High Mass settings, respectively. When starting with 0.5–1.25 μg of gDNA, the Low Mass workflow provides sufficient library to load one SMRT Cell using SPRQ™ or SPRQ-Nx chemistry. Higher DNA inputs along with the High Mass parameters may also be used when additional library yield is desired. Use the same mass setting for both SRE and shearing; do not combine Low Mass and High Mass settings within a sample workflow. 
> Table 1. Recommended DNA input mass into SRE by starting gDNA quality
Single SMRT Cell SPRQ/SPRQ-Nx 
Non-SPRQ or multiple SMRT Cells (compatible with SPRQ/SPRQ-Nx) gDNA quality Low mass High mass Expected SRE recovery (dependent on DNA quality) 
70% >10 kb (recommended) 0.5–1.25 μg 2–4 μg 60–95% <70% >10kb 1–1.75 μg 4–5 μg 40–60% <10kb (no SRE) 0.25–1 μg 1–3 μg Not recommended 
Starting with 500 ng of high-quality genomic DNA will typically provide enough library to load at least 1 SMRT Cell using SPRQ/SPRQ-Nx chemistry ( see Table 2 and Table 3). 
If gDNA mass available is between 1.25 μg and 2 μg, use the high mass workflow .
> Table 2. Polymerase-bound library mass necessary for loading on a Revio SMRT Cell at 250 pM
Mean insert size SPRQ/SPRQ-Nx (250 pM) Non-SPRQ (250 pM) 
10,000 bp 41 ng 163 ng 15,000 bp 61 ng 244 ng 18,000 bp 73 ng 293 ng 21,000 bp 85 ng 341 ng Page 6   
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
## SMRTbell prep kit 3.0 protocol stepwise recoveries 
The overall recovery is dependent on gDNA quality and size. The recovery from gDNA to completed SMRTbell library ranges between 10–32% (includes SRE, shearing, SMRTbell library preparation, and ABC, Table 3). 
> Table 3. Expected stepwise recoveries of DNA and SMRTbell library from the SMRTbell prep kit 3.0 protocol. Post-SRE recovery will vary with the quality of the DNA input. Higher quality DNA will yield more recovery post-SRE.
Protocol Step DNA or SMRTbell step recovery 
DNA or SMRTbell overall recovery Expected size (Femto Pulse) 
Starting Input 100% 100% GQN 10 kb >7.0 Post-SRE 65–95% 65–95% GQN 10 kb >9.3 Post-shear SMRTbell bead cleanup 80–95%* 52–90% 15–20 kb Post-ligation SMRTbell bead cleanup 80–95% 42–86% Post-nuclease (pre-cleanup) 40–50% 17–43% Post-3.1x AMPure PB bead cleanup 75–80% 13–34% Post-ABC cleanup 75–95% 10–32% 
*This can vary based on extraction methods. As low as 60% step recovery has been observed. 
# Metagenomic samples 
If preparing metagenomic samples for shotgun sequencing, the following exceptions to the protocol apply: 
• Do not perform SRE 
• Average insert sizes may be lower than 15 kb. 
• Skip shearing if sample QC shows that the average fragment size is <18 kb. Because SRE will be skipped, a lower DNA input mass may be used. Note that 14 to 34% recovery (from gDNA to bound SMRTbell) is expected. Ensure enough DNA is used to meet optimal loading concentrations on Revio, Vega, or Sequel II/e systems. 
# Sample barcoding and multiplexing 
SMRTbell adapter index plate 96A (102-009-200) or plates B, C, and D can be used to barcode samples for this protocol. Recommended to barcode samples with SMRTbell adapter indexes when either multiplexing (multiple samples per SMRT Cell) or when using Revio SMRT Cell – Nx multi-use. Starting with SMRT Link v13.1, there will be a pooling calculator in Sample Setup to help determine the appropriate volumes to use for multiplexing libraries. Prior to pooling libraries together consider the following guidelines: 
• Only pool samples with similar genome sizes to ensure balanced coverage. 
• Ensure that the samples to be pooled have a similar mean insert size and insert length size distribution. Page 7   
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
• Pool samples in an equal molar concentration for best balanced coverage. It is recommended to pool HiFi libraries post-ABC (annealing, binding, cleanup) for the following reasons: 
• Ability to use only the amount of polymerase-bound library needed for that sequencing run and thus preserving un-pooled library for future sequencing runs. 
• Ability to quickly pool different libraries together on additional runs to “top off” coverage. 
• Prevent an inhibitor in one sample from affecting the polymerase binding of all samples in a pool. 
# Reagent and sample handling 
Room temperature is defined as any temperature in the range of 18–25°C for this protocol. 
## SRE 
SRE buffer and Buffer LTE are stored at room temperature. 
## SMRTbell cleanup beads and AMPure PB beads 
Bring SMRTbell cleanup beads and AMPure PB beads to room temperature prior to use. Vortex immediately before any addition to sample. Failure to do this will result in low recovery. Pipette-mix all bead binding and elution steps until beads are distributed evenly in solution. 
## SMRTbell prep kit 3.0 
Thaw the Repair buffer, Nuclease buffer, SMRTbell adapter and Elution buffer at room temperature. Mix reagent buffers with a brief vortex prior to use. Do not vortex enzymes. Quick-spin all reagents in microcentrifuge to collect liquid at bottom prior to use. Keep all temperature-sensitive reagents on ice. 
Temperature-sensitive reagents Step used Tube Reagent 
> Repair and A-tailing
Blue End repair mix 
Green DNA repair mix 
> Adapter ligation
Orange SMRTbell adapter 
Yellow Ligation mix 
Red Ligation enhancer  
> Nuclease treatment
Light green Nuclease mix 
Samples can be stored at 4°C at all safe stopping points listed in the protocol. Page 8   
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
## Polymerase kit 
Thaw the following reagents at room temperature: 
Component Tube color 
Annealing buffer Light blue Standard sequencing primer Light green Polymerase buffer Yellow Loading buffer Green Dilution buffer Blue Once thawed, place reaction buffers and sequencing primer on-ice prior to making master mix. The Loading buffer should be left at room-temperature. 
Note: The Loading buffer is light sensitive and should be protected from light when not in use. 
Keep the following reagents on a cold block or ice: 
• Sequencing polymerase 
• Sequencing control 
Bring the following reagents up to room temperature 30 minutes prior to use: 
• Loading buffer 
• SMRTbell cleanup beads 
# Safety precautions 
Refer to the Safety Data Sheet (SDS) for information on reagent hazards and protocols for safe handling, use, storage, and disposal. Page 9 
© 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026 
# Procedure and checklist 
# 1. Short read eliminator (SRE): gDNA size selection 
This step progressively depletes fragments up to 25 kb from genomic DNA samples. 
Important: Use SRE on genomic DNA only. Attempting to use SRE on sheared DNA or HiFi libraries will result in poor recoveries. Similarly, SRE should not be performed on gDNA samples where the majority of the DNA is <10 kb .
If automating this step on the Microlab Prep, refer to the Microlab Prep Guide & overview for details on consumables. If not performing SRE, proceed to the DNA shearing step in section 2. 
a Step Instructions 
1.1 
Dilute gDNA (GQN 10 kb >7.0) to the appropriate concentration in Low TE or Buffer LTE according to the table below. 
Low mass High mass 
Sample volume 25 μL 50 μL DNA concentration 20–50 ng/μL 40–80 ng/μL Recommended max gDNA mass 1.25 μg 4 μg Elution volume (Low TE or Buffer LTE) 200 μL 300 μL Shearing mass limit ≤1 μg ≤3 μg 
Note: If working with low quality gDNA with a GQN 10 kb < 7.0, input mass and concentration can be increased if the expected recovery (40 – 60%, Table 1) matches the pipette-tip shearing mass limit for each respective workflow. For example, 2 μg of gDNA can be used with the Low mass workflow if expected recovery is 40% (800 ng). 
1.2 
Add Buffer SRE to each sample. 
Low mass High mass 
Buffer SRE volume 25 μL 50 μL 
If working in a plate format, heat seal with foil. Vortex/shake to mix for 5 seconds at max speed. 
1.3 
Incubate the sample for 1 hour at 50°C in a heat block or thermal cycler. After incubation, if using a plate format, ensure that it is compatible with a 300 μL elution. If not, transfer to the appropriate deep well plate after incubation and seal with an adhesive seal. 
1.4 Load plate or tube (with the hinge facing toward the outside of the rotor) into the centrifuge. 
1.5 Tube : centrifuge at 10,000 rcf for 30 minutes. 
Plate : centrifuge at >2250 rcf (max 3220 rcf) for 1 hour. 
Important: if using a centrifuge with temperature control (i.e., cooling function), turn this function off by specifying a target temperature set point higher than ambient room temperature (e.g., 29°C or 30°C). Page 10   
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
1.6 
Carefully remove supernatant without disturbing the pellet. 
• Leaving up to 5 μL and 10 μL supernatant with the low and High mass SRE workflow, respectively, is acceptable to ensure the pellet is not aspirated. 
1.7 
If pipette shearing, add Buffer LTE to the tube and incubate at room temperature for 10 minutes. If alternative shearing options will be used, elute in the appropriate volume for that method.     
> Shearing option Low mass High mass
> Pipette shearing 200 μL 300 μL
See appendix for recommended elution volumes if using Megaruptor 3 DNA shearing 
1.8 After incubation, pipette-mix 20 times and vortex/shake the tube/sealed plate for 15s to ensure that the DNA is properly re-suspended and mixed. 
1.9 
Quantify the resuspension to measure DNA recovery. If the recovery is lower than 50% repeat pipette-mixing 20 times and vortex/shake. If the recovery is greater than 50%, proceed to next step (DNA shearing). 
1.10 Proceed to automated DNA shearing. It is recommended to proceed to DNA shearing within 2 weeks of performing SRE. 
SAFE STOPPING POINT - Store at 4°C 
# 2. DNA shearing 
Please see Appendix for instructions on shearing with the Megaruptor 3 system (A1) or Covaris g–TUBE (A4). This section describes the procedure for DNA shearing with automated pipetting using the Hamilton Microlab Prep or Hamilton assay ready workstations (NGS STAR MOA, STARlet, and STAR V). It is possible to shear DNA using other NGS liquid handler systems or automated pipettes. Please check the Automated Workflow Selector, or with your local automation vendor or local PacBio support team for the latest on all qualified DNA shearing methods/equipment. 
Important: A mean fragment size between 15 to 20 kb with a narrow distribution (typically ~10 – 35 kb) is recommended for this protocol. If gDNA is within these ranges or lower, the DNA shearing step can be bypassed. Deviating from the concentration and automation settings is not recommended and will result in undersheared DNA. These shearing parameters are specific for the Hamilton Microlab Prep, or assay ready workstations (Hamilton NGS STAR, STARlet, and STAR V systems) 
# a Step Instructions 
2.1 
Adjust DNA concentration to £5 ng/μL in 200 μL or £10 ng/μL in 300 μL, if necessary (e.g., if more than 1 μg or 3 μg of gDNA was recovered from SRE). Use the Low TE buffer provided with the kit (or buffer LTE from the SRE kit) to dilute samples in a 0.8 mL, 96 DeepWell plate (Thermo Fisher Scientific AB0859). Page 11   
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
2.2 
Parameters for shearing on the Microlab Prep, or Hamilton assay-ready workstations are listed below. These parameters should already be part of the installed method on the instrument.        
> Parameter Low mass High mass
> DNA concentration <5 ng/μL <10 ng/μL
> Volume of Low TE or Buffer LTE 200 μL 300 μL
> Pipette tip 300 μL CO-RE II tips (filtered, black, non-sterile) 300 μL CO-RE II tips (filtered, black, non-sterile)
2.3 Place the plate on the appropriate work deck position and start the shearing procedure. 
2.4 Proceed to the next step of the protocol. 
SAFE STOPPING POINT - Store at 4°C 
# 3. Post-shearing cleanup 
This step concentrates the sheared DNA for the Repair and A-tailing step. Before beginning, ensure the SMRTbell cleanup beads are at room temperature. 
# a Step Instructions post-shear cleanup 
3.1 
Add 1.0X v/v (volume over volume) of resuspended, room-temperature SMRTbell cleanup beads to each tube of sheared DNA. 
• Automated pipette shearing = 200–300 μL 
• Megaruptor 3 shearing = 100–130 μL 
• Megaruptor 3 shearing = 65 μL, skip post-shearing cleanup and proceed to section 4. 
3.2 Pipette-mix the beads until evenly distributed. 
3.3 Quick-spin the tube strip in a microcentrifuge to collect liquid. 
3.4 Incubate at room temperature for 10 minutes to allow DNA to bind beads. 
3.5 Place the tube strip in a magnetic separation rack until beads separate fully from the solution. 
3.6 Slowly remove the cleared supernatant without disturbing the beads. Discard the supernatant. 
3.7 Slowly dispense 200 μL , or enough to cover the beads, of freshly prepared 80% ethanol into each tube. Remove the 80% ethanol and discard. Page 12   
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
3.8 Repeat the previous step. 
3.9 
Remove residual 80% ethanol: 
• Remove the tube strip from the magnetic separation rack. 
• Quick-spin the tube strip in a microcentrifuge. 
• Place the tube strip back in a magnetic separation rack until beads separate fully from the solution. 
• Remove residual 80% ethanol and discard. 
3.10 Remove the tube strip from the magnetic rack. Immediately add 47 μL of low TE buffer to each tube and resuspend the beads by pipetting 10 times or until evenly distributed. 
3.11 Quick-spin the tube strip in a microcentrifuge to collect liquid. 
3.12 Incubate at room temperature for 5 minutes to elute DNA. 
3.13 Place the tube strip in a magnetic separation rack until beads separate fully from the solution. 
3.14 Slowly remove the cleared eluate without disturbing the beads. Transfer eluate to a new tube strip .Discard old tube strip with beads. 
3.15 
Recommended: evaluate sample quality (concentration and size distribution). 
• Take a 1 μL aliquot from each tube and dilute with 9 μ L of Elution buffer or water .
• Measure DNA concentration with a Qubit fluorometer using the 1x dsDNA HS kit. 
• Optional: measure DNA size distribution with a sizing technology (e.g. Femto Pulse) to confirm shearing profile 
3.16 Proceed to the next step of the protocol if sample quality is acceptable. 
SAFE STOPPING POINT - Store at 4°C Page 13   
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
# 4. Repair and A-tailing 
This step repairs sites of DNA damage and prepares the sheared DNA for ligation to the SMRTbell adapter. 
# a Step Instructions for DNA damage and end repair 
4.1 
Add the following components in the order and volume listed below to a new microcentrifuge tube. Adjust component volumes for the number of libraries being prepared, plus 15% overage. For individual preps, add components directly to the sample from the previous step at the specified volumes and skip steps (4.2 to 4.4). 
Repair master mix 
a Tube Component Volume 
Per library 4 libraries 8 libraries 
Purple Repair buffer 8 μL 36.8 μL 73.6 μL 
Blue End repair mix 4 μL 18.4 μL 36.8 μL 
Green DNA repair mix 2 μL 9.2 μL 18.4 μL 
Total volume 14 μL 64.4 μL 128.8 μL 
4.2 Pipette-mix the Repair master mix .
4.3 Quick-spin the Repair master mix in a microcentrifuge to collect liquid. 
4.4 Add 14 μL of the Repair master mix to each sample . Total reaction volume should be 60 μL .
4.5 Pipette-mix each sample. 
4.6 Quick-spin the tube strip in a microcentrifuge to collect liquid. 
4.7 
Run the Repair and A-tailing thermocycler program. Set the lid temperature to ³75°C if programmable. 
Step Time Temperature 
1 30 min 37°C 2 5 min 65°C 3 Hold 4°C 
4.8 Proceed to the next step of the protocol. Page 14   
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
# 5. Adapter ligation and cleanup 
This step ligates the SMRTbell adapter to the ends of each DNA fragment. Please ensure SMRTbell cleanup beads have been brought up to room temperature before proceeding to the cleanup steps. 
# a Step Instructions for SMRTbell adapter ligation and reaction cleanup 
SMRTbell adapter ligation 
5.1 
(Optional) If using an adapter index: add 4 μL of barcoded adapters from the SMRTbell adapter index plate 96A to each respective sample from the previous step and exclude the SMRTbell adapter from the ligation mix. Skip this step if not using an adapter index. 
5.2 
Add the following components in the order and volume listed below to a new microcentrifuge tube. Adjust component volumes for the number of libraries being prepared, plus 10% overage. For individual preps, add components directly to each sample from the previous step in the order and volume listed below, then skip steps (5.3 to 5.5).                     
> Ligation mix
> aTube Component Volume
> Per library 4 libraries 8 libraries
> Orange SMRTbell adapter* 4 μL 17.6 μL 35.2 μL
> Yellow Ligation mix 30 μL 132 μL 264 μL
> Red Ligation enhancer 1 μL 4.4 μL 8.8 μL
> Total volume 35 μL 154 μL 308 μL
*Exclude the SMRTbell adapter if using the SMRTbell adapter index plate 96A 
5.3 Pipette-mix the Ligation master mix .
5.4 Quick-spin the Ligation master mix in a microcentrifuge to collect liquid. 
5.5 Indexed samples: add 31 μL of the Ligation master mix to each sample from the previous step. 
Non-indexed samples: add 35 μL of the Ligation master mix containing the SMRTbell adapter to each sample from the previous step. The total volume per sample should be 95 μL. 
5.6 Pipette-mix each sample. 
5.7 Quick-spin the tube strip in a microcentrifuge to collect liquid. 
5.8 
Run the Adapter ligation thermocycler program. Set the lid temperature to ³30°C if programmable.         
> Step Time Temperature
> 130 min 20°C 2Hold 4°C Page 15
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
Cleanup with 1X SMRTbell cleanup beads 
5.9 Add 95 μL of resuspended, room-temperature SMRTbell cleanup beads to each sample. 
5.10 Pipette-mix the beads until evenly distributed. 
5.11 Quick-spin the tube strip in a microcentrifuge to collect all liquid from the sides of the tubes. 
5.12 Incubate at room temperature for 10 minutes to allow DNA to bind beads. 
5.13 Place the tube strip in a magnetic separation rack until beads separate fully from the solution. 
5.14 Slowly remove the cleared supernatant without disturbing the beads. Discard the supernatant. 
5.15 Slowly dispense 200 μL , or enough to cover the beads, of freshly prepared 80% ethanol into each tube. Remove the 80% ethanol and discard. 
5.16 Repeat the previous step. 
5.17 
Remove residual 80% ethanol: 
• Remove the tube strip from the magnetic separation rack. 
• Quick-spin the tube strip in a microcentrifuge. 
• Place the tube strip back in a magnetic separation rack until beads separate fully from the solution. 
• Remove residual 80% ethanol and discard. 
5.18 Remove the tube strip from the magnetic rack. Immediately add 40 μL of Elution buffer to each tube and resuspend the beads. 
5.19 Quick-spin the tube strip in a microcentrifuge. 
5.20 Incubate at room temperature for 5 minutes to elute DNA. 
5.21 Place the tube strip in a magnetic separation rack until beads separate fully from the solution. 
5.22 Slowly aspirate the cleared eluate without disturbing the beads. Transfer eluate to a new tube strip . Discard old tube strip with beads. 
5.23 Proceed to the next step of the protocol. 
SAFE STOPPING POINT - Store at 4°C Page 16   
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
# 6. Nuclease treatment 
This step removes unligated DNA fragments and leftover SMRTbell adapter from the sample. 
# a Step Instructions for nuclease treatment 
6.1 
Add the following components in the order and volume listed below to a new microcentrifuge tube. Adjust component volumes for the number of libraries being prepared, plus 10% overage. For individual preps, add components directly to each sample from the previous step in the order and volume listed below, then skip steps (6.2 to 6.4). 
Nuclease mix 
a Tube Component Volume 
Per library 4 libraries 8 libraries 
Light purple Nuclease buffer 5 μL 22 μL 44 μL 
Light green Nuclease mix 5 μL 22 μL 44 μL 
Total volume 10 μL 44 μL 88 μL 
6.2 Pipette-mix Nuclease master mix. 
6.3 Quick-spin the Nuclease master mix in a microcentrifuge to collect liquid. 
6.4 Add 10 μL of Nuclease master mix to each sample. Total volume should equal 50 μL .
6.5 Pipette-mix each sample. 
6.6 Quick-spin the tube strip in a microcentrifuge to collect liquid. 
6.7 
Run the Nuclease treatment thermocycler program. Set the lid temperature to ³47°C if programmable. 
Step Time Temperature 
1 15 min 37°C 2 Hold 4°C 
6.8 
Proceed to the next step of the protocol. 
Note: It is necessary to remove the nucleases using either AMPure PB size selection or SMRTbell cleanup beads prior to safely storing the library or libraries. Page 17   
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
# 7. Diluted AMPure PB bead cleanup and size selection 
The AMPure PB bead size selection step removes contaminants and progressively depletes DNA fragments shorter than 5 kb. Please see the Technical note – HiFi WGS Performance with AMPure PB bead size selection for more information on performance of this method. If the DNA library is <10 kb, proceed with a 1x SMRTbell bead cleanup. 
If performing gel-based size selection, skip the AMPure PB cleanup and perform a cleanup using the 1X SMRTbell cleanup beads described in the Appendix. 
Important: Size selection performance is sensitive to bead concentrations; therefore, ensure accurate pipetting volumes when diluting the beads and adding them to the library .
# a Step Instructions for AMPure PB bead size selection 
7.1 
Make a 35% v/v dilution of AMPure PB beads by adding 1.75 mL of resuspended AMPure PB beads to 3.25 mL of Elution buffer. The 35% dilution can be stored at 4°C for 30 days. 
Note: The AMPure PB dilution may be scaled as appropriate for smaller/larger scale projects. 
7.2 Add 3.1X v/v (155 μL) of resuspended, room-temperature 35% AMPure PB beads to each sample from the previous step. 
7.3 Pipette-mix the beads until evenly distributed. 
7.4 Incubate at room temperature for 20 minutes to allow DNA to bind beads. 
7.5 Place sample on an appropriate magnet and allow beads separate fully from the solution. 
7.6 Slowly remove the cleared supernatant without disturbing the beads. 
7.7 Slowly dispense 200 μL , or enough to cover the beads, of freshly prepared 80% ethanol into each sample. Remove the 80% ethanol and discard. 
7.8 Repeat the previous step. 
7.9 
Remove residual 80% ethanol: 
• Remove the sample from the magnet. 
• Quick spin to collect liquid at the bottom. 
• Place sample back on the magnet and allow beads separate fully from the solution. 
• Remove residual 80% ethanol and discard. 
7.10 Remove samples from the magnet and immediately add 26 μL of Elution buffer to each sample. 
7.11 Pipette-mix the beads until evenly distributed. 
7.12 Incubate at room temperature for 5 minutes to elute DNA. 
7.13 Place samples on the magnet and allow the beads to separate fully from the solution. 
7.14 Slowly remove the cleared eluate without disturbing the beads. Transfer eluate to a new tube. Page 18   
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
7.15 
Take a 1 μL aliquot from each tube and dilute with 9 μL of Elution buffer or water . Measure the DNA concentration with a Qubit fluorometer using the 1x dsDNA HS kit. 
DNA concentration must be less than 60 ng/μL to proceed to ABC. Failure to dilute DNA below 60 ng/μL will result in low P1 loading. 
7.16 
Proceed to Section 8 to prepare library for sequencing with Revio or Vega systems Or Proceed to SMRT Link Sample Setup for preparing samples for Sequel II/e. 
SAFE STOPPING POINT - Store at 4°C for up to 1 month or -20°C for at least 6 months. 
# 8. Annealing, binding, and cleanup (ABC) 
This step is for preparing the SMRTbell library (25 μL) for sequencing on Revio or Vega systems. If samples are pooled prior to ABC or a custom volume is required, see Appendix section A3. The polymerase kit used will depend on which sequencer or chemistry is being used. 
# a Step Instructions 
8.1 
Prepare the appropriate volume of master mix with 10% overage using the per reaction volumes listed below. 
Annealing mix 
a Tube Component Volume 
Light blue Annealing buffer 12.5 μL 
Light green Standard sequencing primer 12.5 μL 
Total volume 25 μL 
8.2 Pipette-mix the Annealing mix and quick spin to collect liquid. 
8.3 Add 25 μL of the Annealing mix to each library. Total volume should equal 50 μL .
8.4 Pipette-mix each sample and quick spin to collect liquid. 
8.5 Incubate at room temperature for 15 minutes .
8.6 During primer incubation, prepare the polymerase dilution (see below) and store on ice. Page 19   
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
8.7 
To prepare the polymerase, add the following components to a new microcentrifuge tube on ice. Adjust component volumes for the number of samples being prepared, plus 10% overage.         
> Polymerase Dilution
> aTube Component Volume
> Yellow Polymerase buffer 47 μL
> Purple Sequencing polymerase 3 μL
> Total volume 50 μL
8.8 Pipette mix the polymerase dilution and quick-spin to collect liquid. 
8.9 Add 50 μL of polymerase dilution to primer annealed sample. Total volume should equal 100 μL .
8.10 Pipette-mix each sample and quick-spin to collect liquid. 
8.11 Incubate at room temperature for 15 minutes. 
8.12 Proceed immediately to the next step of the protocol to remove excess polymerase. 
Post-binding cleanup with 1X SMRTbell cleanup beads 
8.13 Add 100 μL of resuspended, room-temperature SMRTbell cleanup beads to each sample 
8.14 Pipette-mix the beads until evenly distributed and quick-spin if necessary to collect all liquid from the sides of the tube. 
8.15 Incubate at room temperature for 10 minutes to allow DNA to bind beads 
8.16 Place sample on an appropriate magnet and allow beads to separate fully from the solution 
8.17 Slowly remove the cleared supernatant without disturbing the beads. Discard the supernatant. 
DO NOT USE EtOH. Proceed immediately to the elution. It is important not to let the beads dry out. 
8.18 
Remove sample from the magnet and immediately add Loading buffer to each tube and resuspend the beads by pipette mixing.   
> Revio/Vega SPRQ polymerase kit Vega polymerase kit (non-SPRQ)
> Loading buffer 25 μL 50 μL
8.19 Quick-spin the samples to collect any liquid from the sides of the tube. 
8.20 Incubate at room temperature for 1 5 minutes to elute DNA 
8.21 Place sample on magnet and allow beads to separate fully from the solution. 
8.22 Slowly remove the cleared eluate without disturbing the beads. Transfer eluate to a new tube .Discard the old tube with beads 
8.23 
Use 1 μL of sample to measure DNA concentration with a Qubit fluorometer using the 1x dsDNA HS kit. Calculate the total mass. The final overall recovery should be 10–32% as measured from gDNA input mass to completed SMRTbell library (includes SRE, shearing, library prep, and ABC). Page 20   
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
Important: The Qubit Flex instrument is not compatible with measuring polymerase-bound library in Loading Buffer. Concentration readings will not be accurate. 
8.24 
Proceed to the Loading Calculator in SMRT Link v13.3 or higher to calculate the final dilution for adding the sample to Sequencing reagent plate. The recommended loading concentration is 200 – 300 pM. 
PROTOCOL COMPLETE 
Important: Polymerase-bound libraries can be stored at 4°C for up to 1 month, or at -20°C for at least 6 months prior to sequencing. Polymerase-bound libraries can withstand up to 4 freeze-thaw cycles. Note that the Loading buffer is light sensitive. Page 21   
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
# Appendix 
# A1. DNA shearing with the Megaruptor 3 system 
DNA shearing 
Megaruptor 3 system Diagenode B06010003 Megaruptor 3 shearing kit Diagenode E07010003 This step describes the procedure for shearing DNA using the Megaruptor 3. Optimal conditions may vary by sample. 
# a Step Instructions DNA shearing and cleanup 
DNA shearing 
A1.1 
Dilute DNA to the appropriate concentration in low TE buffer .
Volume Target concentration range 
Low mass 65 μL 4–15 ng/μL High mass 100–130 μL 10–39 ng/μL 
A1.2 
Shear DNA on the Megaruptor 3 system. Recommended settings are below. 
Genome Shear speed Target insert length 
Human, plant, or animal 31 15–18 kb Microbe 40 7–10 kb 
A1.3 
Transfer sheared DNA into a tube strip for a 1x SMRTbell cleanup bead step. If shearing volume is 65 μl, proceed directly to Repair and A-tailing. Typical volume loss during shearing is between 5– 10 μL. 
# A2. 1X SMRTbell cleanup for performing gel-based size selection. 
This step describes the cleanup prior to performing gel-based size selection. Please see the Technical Note -Alternative size selection methods for SMRTbell prep kit 3.0 for procedural details. 
# a Step Instructions for bead binding, washing, and sample elution 
A2.1 Add 50 μL of SMRTbell cleanup beads to each nuclease treated library. 
A2.2 Pipette-mix the beads until evenly distributed. 
A2.3 Quick-spin the tube strip in a microcentrifuge to collect all liquid. 
A2.4 Incubate at room temperature for 10 minutes to allow DNA to bind beads. Page 22   
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
A2.5 Place tube strip in a magnetic separation rack until beads separate fully from the solution. 
A2.6 Slowly remove the cleared supernatant without disturbing the beads. It is recommended to save the supernatant in another tube strip in case of poor DNA recovery. 
A2.7 Slowly dispense 200 μL of 80% ethanol into each tube. Remove the 80% ethanol and discard. 
A2.8 Repeat the previous step. 
A2.9 
Remove residual 80% ethanol: 
• Remove tube strip from the magnetic separation rack. 
• Quick-spin tube strip in a microcentrifuge. 
• Place tube strip back in a magnetic separation rack until beads separate fully from the solution. 
• Remove residual 80% ethanol and discard. 
A2.10 Remove tube strip from the magnetic rack. Immediately add 21 μL of Elution buffer to each tube and resuspend the beads by pipetting 10 times or until evenly distributed. 
A2.11 Quick-spin the tube strip in a microcentrifuge to collect liquid. 
A2.12 Incubate at room temperature for 5 minutes to elute DNA. 
A2.13 Place tube strip in a magnetic separation rack until beads separate fully from the solution. 
A2.14 Slowly remove the cleared eluate without disturbing the beads. Transfer eluate to a new tube strip .Discard old tube strip with beads. 
A2.15 
Take a 1 μL aliquot from each tube and dilute with 9 μL of Elution buffer or water . Measure DNA concentration with a Qubit fluorometer using the 1x dsDNA HS kit. Calculate the total mass. 
Recommended: Further dilute each aliquot to 250 pg/μL with Femto Pulse dilution buffer. Measure final SMRTbell library size distribution with a Femto Pulse system. 
A2.16 
Store libraries at 4°C if sequencing within 1 month. Store long-term at -20°C. SMRTbell libraries are expected to degrade over time at the same rate as any appropriate buffered pure DNA sample. Minimize freeze/thaw cycles and do not expose to direct sunlight or UV radiation. 
# A3. Annealing, binding, and cleanup (ABC) for custom volumes 
This step is for preparing libraries for sequencing on PacBio HiFi sequencers. Libraries or pools of libraries must be at a concentration of <60 ng/μL. The sequencing polymerase is stable once bound to the HiFi library and can be stored at 4°C for 1 month or at -20 °C for at least 6 months. Use the calculations below to determine reagent volumes based on input sample volume:           
> SMRTbell library Annealing buffer Standard sequencing primer Polymerase dilution
> Volume (μL) xx/2 x/2 x*2 Example 100 50 50 200 Page 23
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
See Section 8 Annealing, binding, and cleanup (ABC) for full protocol. 
# A4. DNA shearing with Covaris g-TUBE 
DNA shearing PN 
g-TUBE Covaris 520079 This step describes the procedure for shearing DNA using Covaris g-TUBE. Optimal conditions will vary by sample .
# a Step Instructions DNA shearing and cleanup 
A4.1 
Dilute DNA to the appropriate concentration in low TE buffer or Buffer LTE .
gDNA mass Volume Target concentration range 
500 ng – 1000 ng 150 μL 3.3 ng/μL - 6.7 ng/μL 
>1000 – 2000 ng 150 μL >6.7 ng/μL – 13.3 ng/μL 
A4.2 
Centrifuge according to the below conditions for 5 minutes per pass. 
gDNA mass Number of passes Centrifugation speed Target insert length 
500 ng – 1000 ng 2 1000 xg (rcf) 15–18 kb 
>1000 – 2000 ng 2 1500 xg (rcf) 
A4.3 Transfer sheared DNA into a tube strip for a 1x (150 μL) SMRTbell bead cleanup step. Final elution volume is 47 μL. Page 24   
> © 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026
# Troubleshooting FAQs 
1. I have 1.25–2 μg of gDNA. Should I use the low-mass or high-mass workflow? 
• Use the high-mass workflow. For a 50 μL SRE input volume, this corresponds to a gDNA concentration of 25– 40 ng/μL. 
2. How should I quantify gDNA to ensure an accurate concentration? 
• Use a double-stranded DNA–specific method, such as a Qubit fluorometer. 
• Vigorously vortex the sample before quantification to improve accuracy. Vortexing will not adversely affect the DNA. 
3. When should I skip SRE? 
• Skip SRE if most of the input DNA is less than 10 kb, or on previously sheared DNA or SMRTbell libraries. 
• When workflow time is prioritized over optimal HiFi sequencing yield. 
• When working with DNA amounts less than 500 ng. 
4. What can cause low SRE recovery? 
• Inaccurate quantification: DNA concentration below recommended range. 
• Insufficient mixing: Buffer SRE must be thoroughly mixed with the sample before incubation and centrifugation. Vortex well; pipette mixing before vortexing may further improve recovery. 
• Incomplete pellet resuspension: Pipette-mix and vortex the final eluate, then quantify the sample again. 
• Accidental pellet aspiration: If the supernatant is still available, vortex or mix it, incubate at 55°C for 1 hour, and centrifuge again to re-pellet the DNA. Then remove the supernatant and resuspend the pellet according to the protocol. 
• Delayed removal after centrifugation: Retrieve the sample immediately after centrifugation. Over time, the pellet may detach or diffuse into the supernatant and be aspirated during removal. 
5. Are enzymatic sheared samples compatible with the protocol? 
• Yes, seqWell LongPlex or NEB Ultrashear samples are compatible with this protocol and SMRTbell prep kit 3.0. Please follow manufacturer’s respective protocol for details. 
• Enzymatically sheared samples will typically have smaller insert sizes than mechanical sheared samples. Expect lower sequencing yields as a result. 
6. What should I check if recovery is low after a bead cleanup? 
• Confirm that the beads were brought to room temperature and thoroughly resuspended immediately before use. Page 25 
© 2026 PacBio. All rights reserved. Research use only. Not for use in diagnostic procedures. 102-166-600 REV09 AUG2026 
• Pipette-mix until the beads are evenly distributed during both binding and elution. Allow the beads to separate completely on the magnet, avoid aspirating the bead pellet, remove residual ethanol, and add the elution buffer immediately. 
• For diluted AMPure PB bead size selection, verify that the 35% bead dilution and 3.1 × addition were prepared accurately. 
7. What happens if the library is not diluted to the recommended concentration before ABC? 
• Primer and polymerase concentrations remain constant regardless of library input concentration. The recommended library concentration maintains the appropriate ratio of primer and polymerase to SMRTbell templates. Using a library concentration above the recommended range may leave a greater proportion of templates without primer or polymerase, resulting in a lower P1 value. 
8. If I make a mistake during ABC, how do I recover the library? 
• Perform a 1 × SMRTbell bead cleanup using standard procedures, including the ethanol washes . For example, add 50 μL of SMRTbell cleanup beads to 50 μL of bound library. Elute in 25 μL of EB, then repeat ABC according to the standard procedure. 
Revision history (description) Version Date 
Initial release 01 Apr 2022 Updated to include new information for the Revio system 02 Feb 2023 Updated with new reccomendations for WGS library prep 03 Mar 2024 Updated with stepwise recovery table 04 Apr 2024 Updated for SPRQ chemistry and the Vega system 05 Dec 2024 Corrected error in target DNA concentration range 06 Jan 2025 Added ABC reagents to the Reagent handling section, clarified polymerase kit part numbers 07 Jun 2025 Updated for Revio SPRQ-Nx 08 May 2026 Updated for Vega SPRQ-Nx, general improvements, and QC recommendations updated 09 August 2026 Research use only. Not for use in diagnostic procedures. 2026 Pacific Biosciences of California, Inc. (“PacBio”). All rights reserved. Information in this document is subject to change without notice. PacBio assumes no responsibility for any errors or omissions in this document. Certain notices, terms, conditions and/or use restrictions may pertain to your use of PacBio products and/or third-party products. Refer to the applicable PacBio terms and conditions of sale and to the applicable license terms at pacb.com/license. Pacific Biosciences, the PacBio logo, PacBio, Circulomics, Omniome, SMRT, SMRTbell, Iso-Seq, Sequel, Nanobind, Revio, Revio SPRQ, Kinnex, PureTarget, SPRQ, Vega and Vega SPRQ are trademarks of PacBio. Reference to third-party companies, products, or services are for informational purposes only and do not imply endorsement, sponsorship, or affiliation.